import { Suspense, lazy } from 'react'
import AuthGuard from './components/AuthGuard'
import DashboardLayout from './components/dashboard/DashboardLayout'
import GuestGuard from './components/GuestGuard'
import LoadingScreen from './components/LoadingScreen'

const Loadable = (Component) => (props) => (
  <Suspense fallback={<LoadingScreen />}>
    <Component {...props} />
  </Suspense>
)

// Authentication pages

const Login = Loadable(lazy(() => import('./pages/authentication/Login')))
const PasswordRecovery = Loadable(lazy(() => import('./pages/authentication/PasswordRecovery')))
const PasswordReset = Loadable(lazy(() => import('./pages/authentication/PasswordReset')))
const Register = Loadable(lazy(() => import('./pages/authentication/Register')))
const VerifyCode = Loadable(lazy(() => import('./pages/authentication/VerifyCode')))

// Dashboard pages

const Account = Loadable(lazy(() => import('./pages/dashboard/Account')))
const Overview = Loadable(lazy(() => import('./pages/dashboard/Overview')))

const TrainingList = Loadable(lazy(() => import('./pages/training/TrainingList')))
const TrainingDetail = Loadable(lazy(() => import('./pages/training/TrainingDetail')))
const TrainingCreate = Loadable(lazy(() => import('./pages/training/TrainingCreate')))

// Error pages

const AuthorizationRequired = Loadable(lazy(() => import('./pages/AuthorizationRequired')))
const NotFound = Loadable(lazy(() => import('./pages/NotFound')))
const ServerError = Loadable(lazy(() => import('./pages/ServerError')))

const routes = [
  {
    path: 'authentication',
    children: [
      {
        path: 'login',
        element: (
          <GuestGuard>
            <Login />
          </GuestGuard>
        )
      },
      {
        path: 'password-recovery',
        element: (
          <GuestGuard>
            <PasswordRecovery />
          </GuestGuard>
        )
      },
      {
        path: 'password-reset',
        element: <PasswordReset />
      },
      {
        path: 'register',
        element: (
          <GuestGuard>
            <Register />
          </GuestGuard>
        )
      },
      {
        path: 'register-unguarded',
        element: <Register />
      },
      {
        path: 'verify-code',
        element: <VerifyCode />
      }
    ]
  },
  {
    path: '*',
    element: (
      <AuthGuard>
        <DashboardLayout />
      </AuthGuard>
    ),
    children: [
      {
        path: '/',
        element: <Overview />
      },
      {
        path: 'personal-goals',
        element: <Account />
      },
      {
        path: 'budget',
        element: <Overview />
      },
      {
        path: 'training',
        children: [
          {
            path: '/',
            element: <TrainingList />,
          },
          {
            path: '/create',
            element: <TrainingCreate />
          },
          {
            path: '/:training',
            element: <TrainingDetail />
          }
        ]
      },
      {
        path: 'brownbag-sessions',
        element: <Overview />
      },
      {
        path: 'calendar',
        element: <Overview />
      },
      {
        path: 'finance',
        children: [
          {
            path: 'spendings',
            element: <Overview />
          },
          {
            path: '/spendings/:spending',
            element: <Overview />
          },
          {
            path: 'analytics',
            element: <Overview />
          }
        ]
      },
      {
        path: 'hr',
        children: [
          {
            path: 'users',
            element: <Overview />
          },
          {
            path: 'analytics',
            element: <Overview />
          }
        ]
      },
      {
        path: 'admin',
        children: [
          {
            path: 'settings',
            element: <Overview />
          },
          {
            path: 'company',
            element: <Overview />
          }
        ]
      }
    ]
  },
  {
    path: '401',
    element: <AuthorizationRequired />
  },
  {
    path: '500',
    element: <ServerError />
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes
