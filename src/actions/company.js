import axios from '../utils/axios'
import * as types from '../constants/company'

export const getCompanyBySubdomain = (identifier, password) => async (dispatch) => {
  const company = await axios.get('/check/company')

  return dispatch({
    type: types.SET_COMPANY_BY_SUBDOMAIN,
    company
  })
}
