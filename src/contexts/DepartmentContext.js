import { createContext, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import qs from 'qs'
import axios from '../lib/axios'

const initialState = {
  departments: { totalDocs: 0, docs: [] }
}

const handlers = {
  SET_DEPARTMENTS: (state, action) => {
    const departments = action.payload

    return {
      ...state,
      ...departments
    }
  }
}

const reducer = (state, action) => (handlers[action.type]
  ? handlers[action.type](state, action)
  : state)

const DepartmentContext = createContext({
  ...initialState,
  fetchDepartments: () => Promise.resolve(),
  fetchDepartmentById: () => Promise.resolve()
})

export const DepartmentProvider = (props) => {
  const { children } = props
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const initialize = async () => {
      try {
        const { data: departments } = await axios.get(`/department`)

        dispatch({
          type: 'SET_DEPARTMENTS',
          payload: {
            departments
          }
        })
       } catch (err) {
        console.error(err)
        dispatch({
          type: 'SET_DEPARTMENTS',
          payload: {}
        })
      }
    }

    initialize()
  }, [])

  const fetchDepartments = async (query, limit, page) => {
    const q = {}
    if (query) q.q = query
    if (limit) q.limit = limit
    if (page) q.page = page

    const querystring = qs.stringify({ ...q })

    const { data: departments } = await axios.get(`/department?${querystring}`)

    dispatch({
      type: 'SET_DEPARTMENTS',
      payload: {
        departments
      }
    })
  }

  const fetchDepartmentById = async (id) => {
    const { data: department } = await axios.get(`/department/${id}`)

    return department
  }

  return (
    <DepartmentContext.Provider
      value={{
        ...state,
        fetchDepartments,
        fetchDepartmentById
      }}
    >
      {children}
    </DepartmentContext.Provider>
  )
}

DepartmentProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default DepartmentContext
