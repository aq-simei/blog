import { render } from "@testing-library/react";
import { PostsProvider } from "../Hooks/usePosts";
import { mockedPosts } from "../__tests__/mocks/Posts_mocks";
import { getPosts } from "../Hooks/usePosts";

const AllWrappers = ({ children }) => {
  return (
    <PostsProvider value={{ mockedPosts, getPosts }}>{children}</PostsProvider>
  );
};
const customRender = (ui) => render(ui, { wrapper: AllWrappers });

export * from "@testing-library/react";
export { customRender as render };
