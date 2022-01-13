import * as postActions from '../actions/post.actions'
import * as commentActions from '../actions/comment.actions'

describe('Comment life cycle', () => {
  let postId: string

  beforeEach(async () => {
    // Deleting the created post as part of data cleanup. Always cleanup all data created during a test
    const createPostResp = await postActions.createPost('foo', 'bar', '1')
    expect(createPostResp.status).toBe(201)
    postId = createPostResp.data.id
  })

  afterEach(async () => {
    // Deleting the created post as part of data cleanup. Always cleanup all data created during a test
    const deletePostResp = await postActions.deletePost(postId)
    expect(deletePostResp.status).toBe(200)
  })

  it('Should be able to get comments of a new post', async () => {

    // Fetch comments of a post
    const getPostCommentsResp = await commentActions.getPostComments(postId)
    expect(getPostCommentsResp.status).toBe(200)
  })
})
