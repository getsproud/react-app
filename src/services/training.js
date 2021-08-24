import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import qs from 'qs'

const domain = origin.match(/(https:\/\/)?(([^.]+)\.)?(([^.]+)\.)?(sproud(\.io|\.dev))$/)[5]
const baseOrigin = origin.match(/(https:\/\/)?(([^.]+)\.)?(([^.]+)\.)?(sproud(\.io|\.dev))$/)[6]  

export const trainingApi = createApi({
  reducerPath: 'training',
  baseQuery: fetchBaseQuery({ 
    baseUrl: `https://api.${domain !== undefined ? domain + '.' : ''}${baseOrigin}/v1/training`,
    credentials: 'include'
  }),
  tagTypes: ['Trainings', 'Training', 'Participate', 'Feedback'],
  endpoints: builder => ({
    getAllTrainings: builder.query({
      query: (params) => ({
         url: '',
         params
      }),
      transformResponse: response => response.data,
      providesTags: ['Trainings']
    }),
    getTrainingById: builder.query({
      query: id => `/${id}`,
      transformResponse: response => response.data,
      providesTags: ['Training']
    }),
    getFeedbacksForTraining: builder.query({
      query: data => `/feedback/training/${data.id}?page=${data.page || 1}&limit=${data.limit || 12}`,
      transformResponse: response => response.data,
      providesTags: ['Feedback']
    }),
    participate: builder.mutation({
      query: data => ({
        url: `/${data.id}/participate`,
        method: 'PUT',
        body: { remove: data.remove, ticket: data.ticket }
      }),
      transformResponse: response => response.data,
      providesTags: ['Participate'],
      invalidatesTags: ['Training']
    })
  })
})

export const {
  useGetAllTrainingsQuery,
  useParticipateMutation,
  useGetTrainingByIdQuery,
  useGetFeedbacksForTrainingQuery
} = trainingApi