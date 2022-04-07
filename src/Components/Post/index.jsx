export const Post = ({ post }) => {
  return (
    <div>
      <span>Post N°: {post.id}</span>
      <p>
        <strong>{post.title}</strong>
      </p>
    </div>
  );
};
