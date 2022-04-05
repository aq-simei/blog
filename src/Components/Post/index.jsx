export const Post = ({ post }) => {
  return (
    <div>
      <h3>{post.id}</h3>
      <p>{post.title}</p>
    </div>
  );
};
