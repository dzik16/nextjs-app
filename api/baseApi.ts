import { getTokenFromLocalStorage } from '../store/profile.store'
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'

type SsuAPIParams = {
  cookie?: string
}

let API: AxiosInstance

const setupAPIClient = () => {
  API = axios.create({
    baseURL: "http://10.10.10.2:1020",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })

  API.interceptors.response.use(
    (response) => {
      return response
    },
    (error: AxiosError) => {
      if (!error.response) {
        return
      } else {
        return Promise.reject(error)
      }
    }
  )
}

export const initialize = (params?: SsuAPIParams, anonymous?: boolean): AxiosInstance => {
  // always create new axios instance when cookie changed
  if (params?.cookie || !API || anonymous) {
    setupAPIClient()
  }
  
  const token = getTokenFromLocalStorage()

  if (token) {
    //@ts-ignore
    API.interceptors.request.use((config: AxiosRequestConfig) => {
      config.headers = {
        ...config.headers,
      }
      config.headers['Authorization'] = `Bearer ${token}`
      return config
    })
  }

  return API
}

export default initialize
