import { usePosts } from "../../Contexts/PostsContext";
import { ListComments } from "../../services/comments";
import { Post } from "../Post";

export function PostsList() {
  ListComments();
  const { posts, isLoading } = usePosts();
  if (isLoading === false) {
    return (
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    );
  } else {
    return <div className="posts-loading">Loading...</div>;
  }
}
