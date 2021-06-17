import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { reduxLoaderMiddleware } from 'redux-state-loader'
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer, createTransform } from 'redux-persist'
import storage from 'localforage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'

import rootReducer from '../reducers'

// import * as fetches from '../utils/prepare-fetches'

import omit from 'lodash/omit'

const blacklistPaths = ['employee.authenticated']

const persistConfig = {
  key: 'sproudStore',
  storage,
  stateReconciler: autoMergeLevel2,
  blacklist: blacklistPaths.filter(a => !a.includes('.')),
	transforms: [
		createTransform((inboundState, key) => {
			const blacklistPaths_forKey = blacklistPaths.filter(path => path.startsWith(`${key}.`)).map(path => path.substr(key.length + 1))
			return omit(inboundState, ...blacklistPaths_forKey)
		}, null)
	]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configureStore = async (initialState?: {}) => {
  // Redux Configuration
  const middleware = []
  const enhancers = []

  // Thunk Middleware
  // middleware.push(thunk.withExtraArgument(fetches))
  middleware.push(thunk)
  middleware.push(reduxLoaderMiddleware())

  if (process.env.NODE_ENV === 'development') {
    // Logging Middleware
    const logger = createLogger({
      level: 'info',
      collapsed: true
    })

    middleware.push(logger)
  }

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware))
  const enhancer = composeWithDevTools(...enhancers)

  // Create Store
  const store = createStore(persistedReducer, initialState, enhancer)

  if (module.hot) {
    module.hot.accept(
      '../reducers',
      () => store.replaceReducer(require('../reducers')) // eslint-disable-line global-require
    );
  }

  const persistor = persistStore(store)

  return { persistor, store }
}
