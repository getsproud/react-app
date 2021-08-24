import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser, checkAuthentication, checkInitialization, selectCurrentCompany } from '../slices/authentication'

const useAuth = () => {
  const user = useSelector(selectCurrentUser)
  const company = useSelector(selectCurrentCompany)
  const isAuthenticated = useSelector(checkAuthentication)
  const isInitialized = useSelector(checkInitialization)

  return useMemo(() => ({ user, isAuthenticated, isInitialized, company }), [user, isInitialized, company, isAuthenticated])
}

export default useAuth
