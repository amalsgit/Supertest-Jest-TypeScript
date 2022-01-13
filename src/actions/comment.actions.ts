import sendHttpRequest from '../utils/axiosClient'
import config from '../utils/config'

export const getPostComments = async (postId: string) => {
  return await sendHttpRequest(
    'GET',
    `${config.jsonPlaceholderUrl}/posts/${postId}/comments`,
  )
}