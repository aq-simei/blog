import { listPostCommentaries } from "../../services/commentary";

export const Post = ({ post }) => {

  return (
    <div>
      {/* <span>Post #{post.id}</span> */}
      <p>
        <strong>{post.commentaries[0].body}</strong>
      </p>

    </div>
  );
};
