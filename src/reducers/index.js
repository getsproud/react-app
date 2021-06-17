import { combineReducers } from 'redux'
import { reduxLoaderReducer } from 'redux-state-loader'
import * as company from './company'
import * as employee from './employee'
import * as budget from './budget'
import * as training from './training'
import * as settings from './settings'
import * as admin from './admin'

const reduxLoader = { reduxLoader: reduxLoaderReducer }

const rootReducer = combineReducers(
  Object.assign(
    {},
    employee,
    company,
    training,
    budget,
    settings,
    admin,
    reduxLoader
  )
)

const reducer = (state, action) => rootReducer(state, action)

export default reducer
