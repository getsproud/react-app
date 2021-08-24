import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { trainingApi } from '../services/training'
import { authenticationApi } from '../services/authentication'
import { feedbackApi } from '../services/feedback'
import authReducer from '../slices/authentication'


const store = configureStore({
  reducer: {
    [trainingApi.reducerPath]: trainingApi.reducer,
    [authenticationApi.reducerPath]: authenticationApi.reducer,
    [feedbackApi.reducerPath]: feedbackApi.reducer,
    auth: authReducer
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(trainingApi.middleware, authenticationApi.middleware, feedbackApi.middleware)
})


setupListeners(store.dispatch)

export default store
