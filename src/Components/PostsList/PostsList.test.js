import { render, screen } from "../../__tests__/test-utils";
import { PostsList } from "./index";
import { mockedPosts } from "../../__tests__/mocks/Posts_mocks";

describe("PostsList", () => {
  const props = mockedPosts;
  console.log(props);

  it("Renders the first post title ", () => {
    render(<PostsList {...props} />);

    const firstPostTitle = screen.getByText("Test title 1");

    expect(firstPostTitle).toBeInTheDocument();
  });
});
