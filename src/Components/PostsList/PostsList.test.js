import { render, screen } from "@testing-library/react";
import { PostsList } from "./index";

describe("PostList", () => {
  it("Renders a Posts List Header", () => {
    render(<PostsList />);

    const postsListHeader = screen.getByText("Posts List");
    expect(postsListHeader).toBeInTheDocument();
  });
});
