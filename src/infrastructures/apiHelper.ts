import apiClient from '@/config/axiosClient'
import type { AxiosResponse } from 'axios'

import { createQueryParam } from '@/utils'

// Generic GET Request
export const getRequest = async (
  path: string,
  // params?: Record<string, any>
): Promise<AxiosResponse<any>> => {
  // const url = `${path}}`
  return await apiClient.get(path)
}

// Generic POST Request
export const postRequest = async (path: string, data: any): Promise<AxiosResponse<any>> => {
  return await apiClient.post(path, data)
}

// Generic PUT Request
export const putRequest = async (path: string, data: any): Promise<AxiosResponse<any>> => {
  return await apiClient.put(path, data)
}

// Generic DELETE Request
export const deleteRequest = async (path: string): Promise<AxiosResponse<any>> => {
  return await apiClient.delete(path)
}
