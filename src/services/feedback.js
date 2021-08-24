import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const domain = origin.match(/(https:\/\/)?(([^.]+)\.)?(([^.]+)\.)?(sproud(\.io|\.dev))$/)[5]
const baseOrigin = origin.match(/(https:\/\/)?(([^.]+)\.)?(([^.]+)\.)?(sproud(\.io|\.dev))$/)[6]  

export const feedbackApi = createApi({
  reducerPath: 'feedback',
  baseQuery: fetchBaseQuery({ 
    baseUrl: `https://api.${domain !== undefined ? domain + '.' : ''}${baseOrigin}/v1/feedback`,
    credentials: 'include'
  }),
  endpoints: builder => ({
    getFeedbacksForTraining: builder.query({
      query: data => `/training/${data.id}?page=${data.page || 1}&limit=${data.limit || 12}`,
      transformResponse: response => response.data
    })
  })
})

export const {
  useGetFeedbacksForTrainingQuery
} = feedbackApi