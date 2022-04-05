import { usePosts } from "../../Contexts/PostsContext";

export function PostsList() {
  const { posts } = usePosts();
  if (posts.length === 95) {
    return (
      <ul className="posts-list">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    );
  } else {
    return <div>Loading...</div>;
  }
}
