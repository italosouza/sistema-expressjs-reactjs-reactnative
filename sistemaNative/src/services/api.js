import axios from 'axios'
import { getToken } from './auth'
import config from '~/config'

const api = axios.create({ baseURL: config.baseURL })

api.login = data => api.post('/api/session', data)

api.interceptors.request.use(async (request) => {
  const token = getToken()
  if (token) {
    request.headers.Authorization = `Bearer ${token}`
  }
  return request
})

api.interceptors.response.use(
  response => response,
  error => Promise.reject(error.response)
)

export default api
