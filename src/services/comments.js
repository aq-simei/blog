import { usePosts } from "../Contexts/PostsContext";
import { api } from "./api";

export const getComments = () => {
  const { posts } = usePosts();
  console.log(posts);

  api.get(`/posts/1/comments`).then((res) => {
    console.log(res.data);
  });
};
//   getPostComments(post);
// };
//What do I need in here?
//1. What is the endpoint?  => the correct end point is BASE_URL/posts/POST_ID/comments
//2. What is the method? => the used method is a get method
//3. What is the data? => comments are probably given as objects => {postId, id, name, email, body}
//4. What is the response? => the response is an array of objects whose Id == postId => [{postId, id, name, email, body}]
//5. What is the error? => the error is an error object => {message: "error message"}
//6. How can I get the data of each post set? => the data is given as an array of objects => [{postId, id, name, email, body}]
