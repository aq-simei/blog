export const Post = ({ post }) => {
  return (
    <div>
      <span>Post #{post.id}</span>
      <p>
        <strong>{post.title}</strong>
      </p>
    </div>
  );
};
