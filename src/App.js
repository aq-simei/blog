import { PostsList } from "../src/Components/PostsList/index";
import { PostsProvider } from "../src/Hooks/usePosts.jsx";

export function App() {
  return (
    <div className="App">
      <PostsProvider>
        <PostsList />
      </PostsProvider>
    </div>
  );
}
