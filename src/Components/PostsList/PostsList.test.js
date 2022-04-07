import { render, screen, waitFor } from "../../Utils/test-utils";
import { PostsList } from "./index";
import { mockedPosts } from "./Posts_mocks";

describe("PostsList", () => {
  describe("When fetching data", () => {
    it("Renders the loading message ", () => {
      render(<PostsList />, {
        postsContextValue: { posts: mockedPosts, isLoading: true },
      });
      const loadingMessage = screen.getByText(/loading\.\.\./i);
      expect(loadingMessage).toBeInTheDocument();
    });
  });
  describe("When data is fetched", () => {
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
