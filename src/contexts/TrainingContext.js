import { createContext, useReducer, useEffect } from 'react'
import PropTypes from 'prop-types'
import qs from 'qs'
import axios from '../lib/axios'

const initialState = {
  trainings: { totalDocs: 0, docs: [] },
  feedbacks: []
}

const handlers = {
  SET_TRAININGS: (state, action) => {
    const trainings = action.payload

    return {
      ...state,
      ...trainings
    }
  },
  SET_TRAINING: (state, action) => {
    const training = action.payload

    return {
      ...state,
      ...training
    }
  },
  SET_FEEDBACKS: (state, action) => {
    const feedbacks = action.payload

    return {
      ...state,
      ...feedbacks
    }
  }
}

const reducer = (state, action) => (handlers[action.type]
  ? handlers[action.type](state, action)
  : state)

const TrainingContext = createContext({
  ...initialState,
  fetchTrainings: () => Promise.resolve(),
  fetchTrainingById: () => Promise.resolve(),
  fetchTrainingFeedbacks: () => Promise.resolve()
})

export const TrainingProvider = (props) => {
  const { children } = props
  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    const initialize = async () => {
      try {
        const { data: trainings } = await axios.get(`/training`)

        dispatch({
          type: 'SET_TRAININGS',
          payload: {
            trainings
          }
        })
       } catch (err) {
        console.error(err)
        dispatch({
          type: 'SET_TRAININGS',
          payload: {}
        })
      }
    }

    initialize()
  }, [])

  const fetchTrainings = async (query, limit, page, sort, mongoQuery) => {
    const q = {}
    if (query) q.q = query
    if (limit) q.limit = limit
    if (page) q.page = page
    if (sort) q.sort = sort
    if (mongoQuery) {
      q.query = mongoQuery
    }

    const querystring = qs.stringify({ ...q })

    try {
      const { data: trainings } = await axios.get(`/training?${querystring}`)

      dispatch({
        type: 'SET_TRAININGS',
        payload: {  
          trainings
        }
      })
    } catch (err) {
      console.error(err.response)
      dispatch({
        type: 'SET_TRAININGS',
        payload: { 
          trainings: err.response.data.data
        }
      })
    }
  }

  const fetchTrainingById = async (id) => {
    try {
      const { data: training } = await axios.get(`/training/${id}`)

      dispatch({
        type: 'SET_TRAINING',
        payload: {  
          training
        }
      })
    } catch (err) {
      console.error(err.response)
      dispatch({
        type: 'SET_TRAINING',
        payload: { 
          training: err.response.data.data
        }
      })
    }
  }

  const fetchTrainingFeedbacks = async (id, page, limit) => {
    try {
      const { data: feedbacks } = await axios.get(`/feedback/training/${id}?page=${page || 1}&limit=${limit || 12}`)

      dispatch({
        type: 'SET_FEEDBACKS',
        payload: {  
          feedbacks
        }
      })

    } catch(err) {
      console.error(err.response)
      dispatch({
        type: 'SET_FEEDBACKS',
        payload: { 
          feedbacks: err.response.data.data
        }
      })
    }
  }

  return (
    <TrainingContext.Provider
      value={{
        ...state,
        fetchTrainings,
        fetchTrainingById,
        fetchTrainingFeedbacks
      }}
    >
      {children}
    </TrainingContext.Provider>
  )
}

TrainingProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export default TrainingContext
