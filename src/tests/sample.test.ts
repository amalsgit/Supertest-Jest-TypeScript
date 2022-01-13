import * as postActions from '../actions/post.actions'

describe('Post life cycle', () => {
  let postId: string

  afterEach(async () => {
    // Deleting the created post as part of data cleanup
    const deletePostResp = await postActions.deletePost(postId)
    expect(deletePostResp.status).toBe(200)
  })

  it('Should be able to create and retrieve a post', async () => {
    const title = 'foo'
    const body = 'bar'
    const userId = '1'

    // Create a new post
    const createPostResp = await postActions.createPost(title, body, userId)
    expect(createPostResp.status).toBe(201)
    expect(createPostResp.data).toMatchObject({ title, body, id: 101 })
    postId = createPostResp.data.id

    // Retrieve the created post
    const getPostResp = await postActions.getPost(postId)
    // Since this is a dummy endpoint, this will not actually return the real data created in the above call.
    // Thus the api will return 404
    expect(getPostResp.status).toBe(404)
  })
})
