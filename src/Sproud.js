import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { configureStore } from './store'

import ActionCreators from './actions'

import './utils/i18n'

import Auth from './domains/Auth'

import Loader from './components/Loader'
import ProtectedRoute from './components/ProtectedRoute'

const AppLayout = React.lazy(() => import('./components/AppLayout'))
const Dashboard = React.lazy(() => import('./domains/Dashboard'))
const Training = React.lazy(() => import('./domains/Training'))
const Admin = React.lazy(() => import('./domains/Admin'))
const Finance = React.lazy(() => import('./domains/Finance'))
const Calendar = React.lazy(() => import('./domains/Calendar'))
const Budget = React.lazy(() => import('./domains/Budget'))

export default function Sproud() {
  const  [persistor, setPersistor] = useState(undefined)
  const  [store, setStore] = useState(undefined)

  useEffect(() => {
    configureStore()
      .then(({ persistor, store }) => {
        // persistor.purge()

        store.dispatch(ActionCreators.getCompanyBySubdomain())
        store.dispatch(ActionCreators.getEmployee())

        setPersistor(persistor)
        setStore(store)
      })
  }, [])

  if (!store) return <Loader pageLoader />

  return (
    <Provider store={store}>
      <PersistGate loading={<Loader pageLoader />} persistor={persistor}>
        <React.Suspense fallback={<Loader pageLoader />}>
          <Router>
            <Switch>
              <ProtectedRoute type="public" path='/' exact render={props => <React.Suspense fallback={<Loader pageLoader />}><Auth {...props} /></React.Suspense>} />
              <AppLayout>
                <ProtectedRoute path='/dashboard' render={props => <React.Suspense fallback={<Loader pageLoader />}><Dashboard {...props} /></React.Suspense>} />
                <ProtectedRoute path='/trainings' render={props => <React.Suspense fallback={<Loader pageLoader />}><Training {...props} /></React.Suspense>} />
                <ProtectedRoute path='/admin' render={props => <React.Suspense fallback={<Loader pageLoader />}><Admin {...props} /></React.Suspense>} />
                <ProtectedRoute path='/finance' render={props => <React.Suspense fallback={<Loader pageLoader />}><Finance {...props} /></React.Suspense>} />
                <ProtectedRoute path='/calendar' render={props => <React.Suspense fallback={<Loader pageLoader />}><Calendar {...props} /></React.Suspense>} />
                <ProtectedRoute path='/budget' render={props => <React.Suspense fallback={<Loader pageLoader />}><Budget {...props} /></React.Suspense>} />
              </AppLayout>
            </Switch>
          </Router>
        </React.Suspense>
      </PersistGate>
    </Provider>
  )
}
