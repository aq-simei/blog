import { render, screen } from "../../Utils/test-utils";
import { PostsList } from "./index";
import { mockedPosts } from "./Posts_mocks";

describe("PostsList", () => {
  it("Renders the first post title ", () => {
    render(<PostsList />, { postsContextValue: { posts: mockedPosts } });

    const firstPostTitle = screen.getByText("Test title 1");

    expect(firstPostTitle).toBeInTheDocument();
  });
});
