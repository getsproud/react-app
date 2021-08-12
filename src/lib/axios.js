import axios from 'axios'

const domain = origin.match(/(https:\/\/)?(([^.]+)\.)?(([^.]+)\.)?(sproud(\.io|\.dev))$/)[5]
const baseOrigin = origin.match(/(https:\/\/)?(([^.]+)\.)?(([^.]+)\.)?(sproud(\.io|\.dev))$/)[6]

const instance = axios.create({
  baseURL: `https://api.${domain !== undefined ? domain + '.' : ''}${baseOrigin}/v1`,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
})

instance.interceptors.response.use(res => 
  res.data
)

export default instance