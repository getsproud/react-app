import axios from 'axios'

const domain = origin.match(/(https:\/\/)?(([^.]+)\.)?(([^.]+)\.)?(employee|sproud(hq\.dev|hq\.io|\.hq|\.dev))$/)[5]

const instance = axios.create({
    baseURL: `https://api.${domain !== undefined ? domain + '.' : ''}sproud.${process.env.NODE_ENV !== 'production' ? 'dev' : 'io'}/v1`,
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true,
    mode: 'cors'
})

instance.interceptors.response.use(response => {
    return response.data.data
  }, error => {
    console.log(error.response)
    if (error.response.status === 404 && error.response.data) {
      return Promise.resolve(error.response.data.data)
    }
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  })

export default instance
