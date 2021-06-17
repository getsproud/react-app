import axios from '../utils/axios'
import * as types from '../constants/budget'

export const getEmployeeBudget = employee => async (dispatch, getState) => {
  const { employee } =  getState()
  const budget = await axios.get(`/budget/${employee ? employee._id :''}`)

  return dispatch({
    type: types.SET_OVERALL_BUDGET,
    budget
  })
}
