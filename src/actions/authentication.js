import axios from '../utils/axios'
import * as types from '../constants/authentication'

export const authenticate = (identifier, password) => async (dispatch) => {

  const employee = await axios.post('/auth', {identifier, password})
  const department = await axios.get(`/department/${employee.department}`)

  const categories = []
  for (let category in employee.interests) {
    (async () => {
      const c = await axios.get(`/category/${employee.interests[category]}`)
      categories.push(c)
    })()
  }

  employee.interests = categories
  employee.department = department

  return dispatch({
    type: types.SET_EMPLOYEE,
    employee
  })
}

export const getEmployee = () => async (dispatch) => {
  try {
    const employee = await axios.get('/check/employee')
    const department = await axios.get(`/department/${employee.department}`)

    const categories = []
    for (let category in employee.interests) {
      (async () => {
        const c = await axios.get(`/category/${employee.interests[category]}`)
        categories.push(c)
      })()
    }

    employee.interests = categories
    employee.department = department

    return dispatch({
      type: types.SET_EMPLOYEE,
      employee
    })
  } catch (e) {
    return dispatch({
      type: types.UNSET_EMPLOYEE
    })
  }
}
