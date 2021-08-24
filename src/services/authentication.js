import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const domain = origin.match(/(https:\/\/)?(([^.]+)\.)?(([^.]+)\.)?(sproud(\.io|\.dev))$/)[5]
const baseOrigin = origin.match(/(https:\/\/)?(([^.]+)\.)?(([^.]+)\.)?(sproud(\.io|\.dev))$/)[6]  

export const authenticationApi = createApi({
  reducerPath: 'authentication',
  baseQuery: fetchBaseQuery({ 
    baseUrl: `https://api.${domain !== undefined ? domain + '.' : ''}${baseOrigin}/v1`,
    credentials: 'include'
   }),
  endpoints: builder => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth',
        method: 'POST',
        body: { identifier: credentials.email, password: credentials.password }
      }),
      transformResponse: response => response.data
    }),
    checkEmployee: builder.query({
      query: () => ({
        url: '/check/employee'
      }),
      transformResponse: response => response.data
    }),
    checkCompany: builder.query({
      query: () => ({
        url: '/check/company'
      }),
      transformResponse: response => response.data
    })
  })
})

export const {
  useLoginMutation,
  useCheckEmployeeQuery,
  useCheckCompanyQuery
} = authenticationApi