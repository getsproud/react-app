import createReducer from '../utils/createReducer'
import * as companyTypes from '../constants/company'

const initialState = {

}

export const company = createReducer(initialState, {
  [companyTypes.SET_COMPANY_BY_SUBDOMAIN](state, action) {
    let newState = {}

    newState = {
      ...state,
      ...action.company
    }

    return newState
  }
})
