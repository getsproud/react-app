import createReducer from '../utils/createReducer'
import * as budgetTypes from '../constants/budget'

const initialState = {}

export const budget = createReducer(initialState, {
  [budgetTypes.SET_OVERALL_BUDGET](state, action) {
    let newState = {}

    newState = {
      ...state,
      ...action.budget
    }

    return newState
  }
})
