import { usePosts } from "../../Contexts/PostsContext";
import { Post } from "../Post";

export function PostsList() {
  const { posts, showPosts } = usePosts();
  if (showPosts == true) {
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
