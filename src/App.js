import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { CssBaseline, ThemeProvider } from '@material-ui/core'

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

const App = () => {
  const content = useRoutes(routes)
  const { settings } = useSettings()
  const auth = useAuth()

  useScrollReset()

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
      <Toaster position="top-right" />
      { auth.isInitialized ? (
        <DepartmentProvider>
          <TrainingProvider>
            { content }
          </TrainingProvider>
        </DepartmentProvider>
      ) : <SplashScreen /> }

    </ThemeProvider>
  )
}

export default App
