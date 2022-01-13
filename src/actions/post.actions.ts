import sendHttpRequest from '../utils/axiosClient'
import config from '../utils/config'

export const createPost = async (title: string, body: string, userId: string) => {
  return await sendHttpRequest(
    'POST',
    `${config.jsonPlaceholderUrl}/posts`,
    {
      title,
      body,
      userId,
    },
    { 'Content-Type': 'application/json; charset=UTF-8' },
  )
}

export const getPost = async (postId: string) => {
  return await sendHttpRequest(
    'GET',
    `${config.jsonPlaceholderUrl}/posts/${postId}`,
  )
}

export const deletePost = async (postId: string) => {
  return await sendHttpRequest(
    'DELETE',
    `${config.jsonPlaceholderUrl}/posts/${postId}`,
  )
}