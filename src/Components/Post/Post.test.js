import { Post } from "./index";
import { render, screen } from "../../Utils/test-utils";

describe("Post", () => {
  const post = {
    userId: 1,
    id: 1,
    title: "Test title 1",
  };
  it("renders a single post", () => {
    render(<Post post={post}/>);
    const postTitle = screen.getByText(/Test title 1/i);
    expect(postTitle).toBeInTheDocument();
    const postId = screen.getByText(/Post #1/i);
    expect(postId).toBeInTheDocument();
  });
});
