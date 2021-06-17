import createReducer from '../utils/createReducer'
import * as types from '../constants/training'

const initialState = {
  recommendations: [],
  upcoming: [],
  department: []
}

export const training = createReducer(initialState, {
  [types.SET_RECOMMENDED_TRAININGS](state, action) {
    let newState = {}

    newState = {
      ...state,
      recommendations: action.trainings
    }

    return newState
  },
  [types.SET_UPCOMING_TRAININGS](state, action) {
    let newState = {}

    newState = {
      ...state,
      upcoming: action.trainings
    }

    return newState
  },
  [types.SET_TRAININGS_FOR_DEPARTMENT](state, action) {
    let newState = {}

    newState = {
      ...state,
      department: action.trainings
    }

    return newState
  }
})
