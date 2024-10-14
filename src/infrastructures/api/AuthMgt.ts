import { getRequest } from '@/infrastructures/apiHelper'

export const getAuthTest = async () => {
  try {
    const response = await getRequest('/auth/test')
    return response.data
  } catch (error) {
    console.error('Error fetching data:', error)
    throw error
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
