import createReducer from '../utils/createReducer'
import * as settingsTypes from '../constants/settings'

const initialState = {
  user: {
    pagination: {
    limit: 12
    }
  },
  company: {}
}

export const settings = createReducer(initialState, {
  [settingsTypes.SET_USER_SETTINGS](state, action) {
    let newState = {}

    newState = {
      ...state,
      user: {
        ...action.settings
      }
    }

    return newState
  },
  [settingsTypes.SET_COMPANY_SETTINGS](state, action) {
    let newState = {}

    newState = {
      ...state,
      company: {
        ...action.settings
      }
    }

    return newState
  }
})
