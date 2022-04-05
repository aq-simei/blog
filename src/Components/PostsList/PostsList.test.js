import { render, screen, waitFor } from "../../Utils/test-utils";
import { PostsList } from "./index";
import { mockedPosts } from "./Posts_mocks";

describe("PostsList", () => {
  describe("When there are no posts yet", () => {
    it("Renders the loading message ", () => {
      render(<PostsList />, { postsContextValue: { posts: mockedPosts } });
      const loadingMessage = screen.getByText(/loading\.\.\./i);
      expect(loadingMessage).toBeInTheDocument();
    });
  });
  describe("When there are available posts to be rendered", () => {
    it("Renders the posts", async () => {
      render(<PostsList />, { postsContextValue: { posts: mockedPosts } });

      await waitFor(() => {
        screen.getByText(/Test title 1/i);
      });
      const testPost = screen.getByText(/Test title /i);

      expect(testPost).toBeInTheDocument();
    });
  });
});
