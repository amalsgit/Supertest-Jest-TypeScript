import axios, { AxiosResponse, Method } from 'axios'
import { addMsg } from 'jest-html-reporters/helper'

const axiosClient = axios.create()

//Axios client with response interceptor to log errors during api calls
axiosClient.interceptors.response.use(
  async response => {
    await addMsg({ message: `Response Code ${JSON.stringify(response.status, null, 2)}`, context: '' })
    await addMsg({
      message: `Response body ${JSON.stringify(response.data, null, 2)}`, context: ''
    })
    return response
  },
  async error => {
    console.log(error)
    await addMsg({ message: `Error ${JSON.stringify(error.config, null, 2)}`, context: '' })
    return error.response
  },
)

// Main Axios client method to make api calls
const sendHttpRequest = async (
  method: Method,
  url: string,
  data?: Record<string, any>,
  headers?: Record<string, any>,
): Promise<AxiosResponse> => {
  const result = await axiosClient.request({ data, headers, method, url })
  return result
}

export default sendHttpRequest
