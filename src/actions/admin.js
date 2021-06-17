import axios from '../utils/axios'
import * as types from '../constants/admin'

export const getCompanyEmployees = limit => async dispatch => {
  dispatch({ type: types.START_ADMIN_LOADING })

  const employees = await axios.get(`/employee?limit=${limit || 9999}`)

  const budgets = await Promise.all(employees.docs.map(e => axios.get(`/budget/${e._id}`)))
  const departments = await Promise.all(employees.docs.map(e => axios.get(`/department/${e.department}`)))

  const mappedEmployees = employees.docs.map(e => {
    budgets.forEach(b => {
      if (b.employee === e._id) e.budget = b
    })
    departments.forEach(d => {
      if (d._id === e.department) e.department = d
    })

    return e
  })

  employees.docs = mappedEmployees

  dispatch({
    type: types.SET_COMPANY_EMPLOYEES,
    employees
  })

  dispatch({ type: types.SUCCESS_ADMIN_LOADING })
}

export const getCompanyDepartments = page => async dispatch => {
  dispatch({ type: types.START_ADMIN_LOADING })

  const departments = await axios.get(`/department?limit=9999`)

  dispatch({
    type: types.SET_COMPANY_DEPARTMENTS,
    departments
  })

  dispatch({ type: types.SUCCESS_ADMIN_LOADING })
}

export const deleteCompanyEmployee = id => async dispatch => {
  await axios.delete(`/employee/${id}`)

  return dispatch(getCompanyEmployees())
}

export const updateCompanyEmployee = employee => async dispatch => {
  await axios.put(`/employee/${employee._id}`, employee)

  return dispatch(getCompanyEmployees())
}

export const updateCompanyEmployeeBudget = (id, budget) => async dispatch => {
  await axios.put(`/budget/${id}`, budget)

  return dispatch(getCompanyEmployees())
}

export const getSpendings = () => async dispatch => {
  dispatch({ type: types.START_ADMIN_LOADING })

  const budget = await axios.get(`/budget`)

  dispatch({ type: types.SUCCESS_ADMIN_LOADING })

  return budget
}
