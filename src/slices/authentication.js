import { createSlice } from '@reduxjs/toolkit'
import { isUndefined } from 'lodash'
import { authenticationApi } from '../services/authentication'

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
  company: null
}

const slice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    initialize(state) {
      state.isInitialized = true
    }
  },
  extraReducers: builder => {
    builder.addMatcher(
      authenticationApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = payload
        state.isAuthenticated = !isUndefined(payload)
      }
    )
    builder.addMatcher(
      authenticationApi.endpoints.checkEmployee.matchFulfilled,
      (state, { payload }) => {
        state.user = payload
        state.isAuthenticated = !isUndefined(payload)
      }
    )
    builder.addMatcher(
      authenticationApi.endpoints.checkCompany.matchFulfilled,
      (state, { payload }) => {
        state.company = payload
      }
    )
  }
})

export default slice.reducer

export const { initialize } = slice.actions

export const selectCurrentUser = state => state.auth.user
export const selectCurrentCompany = state => state.auth.company

export const checkAuthentication = state => state.auth.isAuthenticated
export const checkInitialization = state => state.auth.isInitialized