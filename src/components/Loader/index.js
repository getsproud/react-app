import React, { useEffect } from 'react'
import { reduxLoaderActions } from 'redux-state-loader'

import './loader.scss'

function Loader({ pageLoader, loaderName, startActions, stopActions }) {

  useEffect(() => {
    if (!pageLoader) {
      reduxLoaderActions.registerLoader({
        id: loaderName,
        startActions,
        stopActions,
      })
    }

    return function cleanup() {
      if (!pageLoader) {
        reduxLoaderActions.unregisterLoader(loaderName)
      }
    }
  })

  return (
    <div className={`preloader ${pageLoader ? 'page-loader' : ''}`}>
      <div className="loader"></div>
    </div>
  )
}

export default Loader
