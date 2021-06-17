import React from 'react'
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom'

import Loader from '../../components/Loader'
import Settings from './settings.js'
import User from './users.js'
import Company from './company.js'

import './admin.scss'

export default function Admin() {

  const { path } = useRouteMatch()

  return (
    <div className="sproud-admin">
      <React.Suspense fallback={<Loader pageLoader />}>
        <Switch>
          <Route path={path} exact render={props => <Redirect to="/admin/settings" />} />
          <Route path={`${path}/settings`} render={props => <React.Suspense fallback={<Loader pageLoader />}><Settings {...props} /></React.Suspense>} />
          <Route path={`${path}/users`} render={props => <React.Suspense fallback={<Loader pageLoader />}><User {...props} /></React.Suspense>} />
          <Route path={`${path}/company`} render={props => <React.Suspense fallback={<Loader pageLoader />}><Company {...props} /></React.Suspense>} />
        </Switch>
      </React.Suspense>
    </div>
  )
}
