import { render } from "@testing-library/react";
import { PostsContext } from "../Contexts/PostsContext";

const customRender = (ui, { postsContextValue, ...options }) => {
  return render(
    <PostsContext.Provider value={{ ...postsContextValue }}>
      {ui}
    </PostsContext.Provider>,
    { ...options }
  );
};

export * from "@testing-library/react";
export { customRender as render };
