import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Loader from '../../components/Loader'
import List from './list'
import Detail from './details'

import './budget.scss'

export default function Budget() {

  const { path } = useRouteMatch()

  return (
    <div className="sproud-budget">
      <React.Suspense fallback={<Loader pageLoader />}>
        <Switch>
          <Route exact path={path} render={props => <React.Suspense fallback={<Loader pageLoader />}><List {...props} /></React.Suspense>} />
          <Route path={`${path}/:budgetId`} render={props => <React.Suspense fallback={<Loader pageLoader />}><Detail {...props} /></React.Suspense>} />
        </Switch>
      </React.Suspense>
    </div>
  )
}
