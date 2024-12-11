import axios from 'axios'
import BaseApi from '../baseApi'
import { ProfileResponseType } from '../../types/profile.type'

// Sign In with Email
export const login = async (username: string, password: string): Promise<ProfileResponseType> => {
  
  const { data } = await BaseApi().request<ProfileResponseType>({
    url: '/auth/Login',
    method: 'POST',
    data: {
      password: password,
      username: username,
    },
    headers: {
      AuthenticationType: 2
    }
  })
  return data
}
