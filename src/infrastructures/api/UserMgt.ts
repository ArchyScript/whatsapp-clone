import { getRequest, postRequest } from "@/infrastructures/apiHelper"
import type { SignupRequest, LoginRequest } from "../types"

export const signup = async (payload: SignupRequest) => {
  try {
    const response = await postRequest("/auth/signup", payload)
    console.log("response", response)
    return response.data
  } catch (error) {
    console.error("Error fetching data:", error)
    throw error
  }
}
export const login = async (payload: LoginRequest) => {
  try {
    const response = await postRequest("/auth/login", payload)
    return response.data
  } catch (error) {
    console.error("Error fetching data:", error)
    return null
    // throw error
  }
}

// export const socialLogin = async (provider:string) => {
//   try {
//     const response = await postRequest('/auth/signup')
//     console.log('response', response)
//     return response.data
//   } catch (error) {
//     console.error('Error fetching data:', error)
//     throw error
//   }
// }

export const getAuthTest = async () => {
  try {
    const response = await getRequest("/auth/test")
    return response.data
  } catch (error) {
    console.error("Error fetching data:", error)
    return null
  }
}

// // Fetch posts
// export const searchPhotos = async (query: SearchQueryParams): Promise<PhotoData> => {
//   let result = {} as PhotoData

//   try {
//     const response = await getRequest('/search/photos', query)
//     result = response.data
//   } catch (error) {
//     console.log('error', error)
//   }
//   return result
// }
