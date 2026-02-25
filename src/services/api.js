import axios from 'axios'

const api = axios.create({ baseURL: 'https://disaster-relief-backend-x5uo.onrender.com/api' })

api.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  if (token) config.headers.Authorization = `Bearer ${token}`
  return config
})

export default api
