import axios from '../utils/axios'
import * as types from '../constants/training'

export const getRecommendedTrainings = (page, limit) => async (dispatch, getState) => {
  dispatch({ type: types.START_FETCHING_TRAININGS })

  const defaultLimit = getState().settings.user.pagination.limit

  const trainings = await axios.get(`/training/recommendations?page=${page || 1}&limit=${limit || defaultLimit}`)

  dispatch({
    type: types.SET_RECOMMENDED_TRAININGS,
    trainings
  })

  dispatch({ type: types.SUCCESS_FETCHING_TRAININGS })
}

export const getUpcomingTrainings = (page, limit) => async (dispatch, getState) => {
  dispatch({ type: types.START_FETCHING_TRAININGS })

  const defaultLimit = getState().settings.user.pagination.limit

  const trainings  = await axios.get(`/training/employee?page=${page || 1}&limit=${limit || defaultLimit}`)

  dispatch({
    type: types.SET_UPCOMING_TRAININGS,
    trainings
  })

  dispatch({ type: types.SUCCESS_FETCHING_TRAININGS })
}

export const getTrainingsForDepartment = (page, limit) => async (dispatch, getState) => {
  dispatch({ type: types.START_FETCHING_TRAININGS })

  const defaultLimit = getState().settings.user.pagination.limit

  const trainings = await axios.post(`/training/departments?page=${page || 1}&limit=${limit || defaultLimit}`, {
    departments: [getState().employee.department._id]
  })

  dispatch({
    type: types.SET_TRAININGS_FOR_DEPARTMENT,
    trainings
  })

  dispatch({ type: types.SUCCESS_FETCHING_TRAININGS })
}

export const goToTraining = (id, ticket) => async () => {
  const training = await axios.put(`/training/${id}/participate`, {ticket})

  return training
}

export const getTrainingById = id => async dispatch => {
  dispatch({ type: types.START_FETCHING_TRAININGS })

  const training = await axios.get(`/training/${id}`)

  dispatch({ type: types.SUCCESS_FETCHING_TRAININGS })

  return training
}

export const getFeebacksForTraining = (id, page) => async () => {
  const feedbacks = await axios.get(`/feedback/training/${id}?page=${page}&limit=1`)

  return feedbacks
}

export const setFeedbackForTraining = feedback => async () => {
  await axios.post(`/feedback`, feedback)
}
