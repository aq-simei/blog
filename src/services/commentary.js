import { api } from "./api";

const getPostCommentaries = (postId) => {
  return api
    .get(`/posts/${postId}/comments`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const listPostCommentaries = (allPosts) => {
  return allPosts.map((currentPost) => {
    return getPostCommentaries(currentPost.id).then((fetchedComments) => {
      currentPost.commentaries = fetchedComments;
      return currentPost;
    });
  });
};
