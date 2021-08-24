import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { useDispatch } from 'react-redux'

import './i18n'

import SplashScreen from './components/SplashScreen'
import { gtmConfig } from './config'
import useAuth from './hooks/useAuth'
import useScrollReset from './hooks/useScrollReset'
import useSettings from './hooks/useSettings'
import { TrainingProvider } from './contexts/TrainingContext'
import { DepartmentProvider } from './contexts/DepartmentContext'
import gtm from './lib/gtm'
import routes from './routes'
import { createCustomTheme } from './theme'
import { initialize } from './slices/authentication'
import { useCheckCompanyQuery, useCheckEmployeeQuery } from './services/authentication'

const App = () => {
  const content = useRoutes(routes)
  const { settings } = useSettings()
  const auth = useAuth()
  const dispatch = useDispatch()
  const { data: company, isLoading: checkedCompany } = useCheckCompanyQuery()
  const { data: employee, isLoading: checkedEmployee } = useCheckEmployeeQuery()

  useScrollReset()

  useEffect(() => {
    if (!checkedEmployee && !checkedCompany) {
      dispatch(initialize())
    }
  }, [checkedCompany, checkedEmployee])

  useEffect(() => {
    gtm.initialize(gtmConfig)
  }, [])

  const theme = createCustomTheme({
    responsiveFontSizes: settings.responsiveFontSizes,
    roundedCorners: settings.roundedCorners,
    theme: settings.theme
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toaster position="bottom-left" />
      { auth.isInitialized ? (
        <>
          { content }
        </>
      ) : <SplashScreen /> }
    </ThemeProvider>
  )
}

export default App
