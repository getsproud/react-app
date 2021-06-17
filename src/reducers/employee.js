import createReducer from '../utils/createReducer'
import * as authTypes from '../constants/authentication'

const initialState = {
  authenticated: false
}

export const employee = createReducer(initialState, {
  [authTypes.SET_EMPLOYEE](state, action) {
    let newState = {}

    newState = {
      ...state,
      authenticated: true,
      ...action.employee
    }

    return newState
  },
  [authTypes.UNSET_EMPLOYEE](state, action) {
    let newState = {}

    newState = {
      authenticated: false
    }

    return newState
  }
})
