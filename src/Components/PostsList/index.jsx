import { usePosts } from "../../Hooks/usePosts";

export function PostsList() {
  const { posts } = usePosts();

  return (
    <div className="posts-list">
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </div>
  );
}
