import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

import Loader from '../../components/Loader'
import List from '../../domains/Training/list'
import Detail from '../../domains/Training/details'

import './training.scss'

export default function Training() {

  const { path } = useRouteMatch()

  return (
    <div className="sproud-training">
      <React.Suspense fallback={<Loader pageLoader />}>
        <Switch>
          <Route exact path={path} render={props => <React.Suspense fallback={<Loader pageLoader />}><List {...props} /></React.Suspense>} />
          <Route path={`${path}/:trainingId`} render={props => <React.Suspense fallback={<Loader pageLoader />}><Detail {...props} /></React.Suspense>} />
        </Switch>
      </React.Suspense>
    </div>
  )
}
