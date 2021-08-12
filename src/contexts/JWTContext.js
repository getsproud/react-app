import { createContext, useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'

import { authApi } from '../__fakeApi__/authApi'
import axios from '../lib/axios'

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null
}

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload

    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user
    }
  },
  LOGIN: (state, action) => {
    const { user } = action.payload

    return {
      ...state,
      isAuthenticated: true,
      user
    }
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    user: null
  }),
  REGISTER: (state, action) => {
    const { user } = action.payload

    return {
      ...state,
      isAuthenticated: true,
      user
    }
  },
  VERIFY_CODE: (state) => ({ ...state }),
  RESEND_CODE: (state) => ({ ...state }),
  PASSWORD_RECOVERY: (state) => ({ ...state }),
  PASSWORD_RESET: (state) => ({ ...state })
}

const reducer = (state, action) => (handlers[action.type]
  ? handlers[action.type](state, action)
  : state)

const AuthContext = createContext({
  ...initialState,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
  verifyCode: () => Promise.resolve(),
  resendCode: () => Promise.resolve(),
  passwordRecovery: () => Promise.resolve(),
  passwordReset: () => Promise.resolve()
})

export const AuthProvider = (props) => {
  const { children } = props
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const initialize = async () => {
      try {
        const cookie = document.cookie.indexOf('sproud.jwt') !== -1

        if (cookie) {
          const { data: user } = await axios.get('/check/employee')
          const { data: department } = await axios.get(`/department/${user.department}`)

          const categories = []
          for (let category in user.interests) {
            (async () => {
              const { data: c } = await axios.get(`/category/${user.interests[category]}`)
              categories.push(c)
            })()
          }

          user.interests = categories
          user.department = department

          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: true,
              user
            }
          })
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null
            }
          })
        }
      } catch (err) {
        console.error(err)
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null
          }
        })
      }
    }

    initialize()
  }, [])

  const login = async (identifier, password) => {
    const { data: user } = await axios.post('/auth', { identifier, password })
    const { data: department } = await axios.get(`/department/${user.department}`)
    
    const categories = []
    for (let category in user.interests) {
      (async () => {
        const { data: c } = await axios.get(`/category/${user.interests[category]}`)
        categories.push(c)
      })()
    }

    user.interests = categories
    user.department = department

    dispatch({
      type: 'LOGIN',
      payload: {
        user
      }
    })
  }

  const logout = async () => {
    dispatch({ type: 'LOGOUT' })
  }

  const register = async (email, name, password) => {
    const accessToken = await authApi.register({ email, name, password })
    const user = await authApi.me(accessToken)

    dispatch({
      type: 'REGISTER',
      payload: {
        user
      }
    })
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        logout,
        register
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default AuthContext
