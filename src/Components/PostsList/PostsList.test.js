import { render, screen, waitFor } from "../../Utils/test-utils";
import { PostsList } from "./index";
import { mockedPosts } from "./Posts_mocks";

describe("PostsList", () => {
  describe("When there are no posts yet", () => {
    it("Renders the loading message ", () => {
      render(<PostsList />, {
        postsContextValue: { posts: mockedPosts, isLoading: true },
      });
      const loadingMessage = screen.getByText(/loading\.\.\./i);
      expect(loadingMessage).toBeInTheDocument();
    });
  });
  describe("When there are available posts to be rendered", () => {
    it("Renders the posts", async () => {
      render(<PostsList />, {
        postsContextValue: { posts: mockedPosts, isLoading: false },
      });

      await waitFor(() => {
        screen.getByText(/Test title 1/i);
      });

      expect(mockedPosts).toHaveLength(3);
    });
  });
});
