import createReducer from '../utils/createReducer'
import * as adminsTypes from '../constants/admin'

const initialState = {
  employees: []
}

export const admin = createReducer(initialState, {
  [adminsTypes.SET_COMPANY_EMPLOYEES](state, action) {
    let newState = {}

    newState = {
      ...state,
      employees: action.employees
    }

    return newState
  },
  [adminsTypes.SET_COMPANY_DEPARTMENTS](state, action) {
    let newState = {}

    newState = {
      ...state,
      departments: action.departments
    }

    return newState
  }
})
