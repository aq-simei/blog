import { Post } from "./index";
import { render, screen } from "../../Utils/test-utils";

describe("Post", () => {
  const post = {
    userId: 1,
    id: 1,
    title: "Test title 1",
  };
  it("renders the post ID and post title ", () => {
    render(<Post post={post} />, {
      postsContextValue: { posts: post, isLoading: false },
    });
    const postTitle = screen.getByText(/Test title 1/i);
    expect(postTitle).toBeInTheDocument();
  });
});
