import { usePosts } from "../../Contexts/PostsContext";

export function PostsList() {
  const { posts } = usePosts();
  console.log(posts);
  return (
    <div className="posts-list">
      {posts.map((post) => (
        <li key={post.id}>{post.id}</li>
      ))}
    </div>
  );
}
