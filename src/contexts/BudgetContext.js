import { createContext, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from '../lib/axios'
import useAuth from '../hooks/useAuth'

const initialState = {}

const handlers = {
  SET_BUDGET: (state, action) => {
    const budget = action.payload

    return {
      ...state,
      ...budget
    }
  }
}

const reducer = (state, action) => (handlers[action.type]
  ? handlers[action.type](state, action)
  : state)

const BudgetContext = createContext({
  ...initialState,
  fetchBudgets: () => Promise.resolve(),
  fetchBudgetById: () => Promise.resolve(),
  fetchBudgetByApproval: () => Promise.resolve(),
  setApprovalForSpending: () => Promise.resolve()
})

export const BudgetProvider = (props) => {
  const { children } = props
  const [state, dispatch] = useReducer(reducer, initialState)
  const { user } = useAuth()

  useEffect(() => {
    const initialize = async () => {
      try {
        const { data: budget } = await axios.get(`/budget/${user ? user._id : ''}`)

        dispatch({
          type: 'SET_BUDGET',
          payload: {
            budget
          }
        })
       } catch (err) {
        console.error(err)
        dispatch({
          type: 'SET_BUDGET',
          payload: {}
        })
      }
    }

    initialize()
  }, [])

  const fetchBudgets = async (user) => {
    const { data: budget } = await axios.get(`/budget/${user ? user._id : ''}`)

    dispatch({
      type: 'SET_BUDGET',
      payload: {
        budget
      }
    })
  }

  const fetchBudgetById = async (id) => {
    const { data: budget } = await axios.get(`/budget/${ id }`)

    dispatch({
      type: 'SET_BUDGET',
      payload: {
        budget
      }
    })
  }

  const fetchBudgetByApproval  = async (user, approval) => {
    const { data: budget } = await axios.get(`/budget/${user ? user._id : ''}/${ approval ? 'approved' : 'unapproved' }`)

    dispatch({
      type: 'SET_BUDGET',
      payload: {
        budget
      }
    })
  }

  const setApprovalForSpending = async (spending, approval) => {
    const { data } = await axios.get(`/budget/spending/${ spending }/${ approval ? 'approved' : 'unapproved' }`)

    dispatch({
      type: 'UPDATE_SPENDING',
      payload: {
        budget: data
      }
    })
  }

  return (
    <BudgetContext.Provider
      value={{
        ...state,
        fetchBudgets,
        fetchBudgetById,
        fetchBudgetByApproval
      }}
    >
      {children}
    </BudgetContext.Provider>
  )
}

BudgetProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default BudgetContext
