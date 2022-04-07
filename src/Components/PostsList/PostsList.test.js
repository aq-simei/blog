import { render, screen } from "../../Utils/test-utils";
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
    it("Renders a list of 3 posts", async () => {
      render(<PostsList />, {
        postsContextValue: { posts: mockedPosts, isLoading: false },
      });
      const firstTestPostTitle = screen.getByText(/Test title 1/i);
      const firstTestPostIdentifier = screen.getByText(/#1/i);

      const secondTestPostTitle = screen.getByText(/Test title 2/i);
      const secondTestPostIdentifier = screen.getByText(/#2/i);

      const thirdTestPostTitle = screen.getByText(/Test title 3/i);
      const thirdTestPostIdentifier = screen.getByText(/#3/i);

      expect(firstTestPostTitle).toBeInTheDocument();
      expect(firstTestPostIdentifier).toBeInTheDocument();

      expect(secondTestPostTitle).toBeInTheDocument();
      expect(secondTestPostIdentifier).toBeInTheDocument();

      expect(thirdTestPostTitle).toBeInTheDocument();
      expect(thirdTestPostIdentifier).toBeInTheDocument();
    });
  });
});
