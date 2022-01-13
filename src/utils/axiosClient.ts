import axios, { AxiosResponse, Method } from 'axios'
import { addMsg } from 'jest-html-reporters/helper'

const sendHttpRequest = async (
  method: Method,
  url: string,
  data?: Record<string, any>,
  headers?: Record<string, any>,
): Promise<AxiosResponse> => {
  try {
    const result = await axios.request({ data, headers, method, url })
    await addMsg({ message: `Response Code ${JSON.stringify(result.status, null, 2)}`, context: '' })
    await addMsg({
      message: `Response body ${JSON.stringify(result.data, null, 2)}`, context: ''
    })

    return result
  } catch (e: any) {
    await addMsg({ message: `Error ${JSON.stringify(e.config, null, 2)}`, context: '' })
    console.log(e)
    throw new Error(`Request failed: ${e}`)
  }
}

export default sendHttpRequest
