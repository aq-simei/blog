import { PostsList } from "../src/Components/PostsList/index";
import { PostsProvider } from "../src/Contexts/PostsContext";

export function App() {
  return (
    <PostsProvider>
      <PostsList />
    </PostsProvider>
  );
}
