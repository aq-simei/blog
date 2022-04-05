import { api } from "../services/api";
import { createContext, useEffect } from "react";
import { useContext, useState } from "react";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [showPosts, setShowPosts] = useState(false);

  useEffect(() => {
    const getPosts = () => {
      api
        .get("/posts?_start=0&_limit=20")
        .then((res) => {
          setPosts(res.data);
        })
        .catch((err) => {
          console.log("Failed to load 0~20 posts", err);
        })
        .then(
          api
            .get("/posts?_start=20&_limit=20")
            .then((res) => {
              setPosts((posts) => [...posts, ...res.data]);
            })
            .catch((err) => {
              console.log("Failed to load 20~40 posts", err);
            })
        )
        .then(
          api
            .get("/posts?_start=40&_limit=20")
            .then((res) => {
              setPosts((posts) => [...posts, ...res.data]);
            })
            .catch((err) => {
              console.log("Failed to load posts 40~60", err);
            })
        )
        .then(
          api
            .get("/posts?_start=60&_limit=20")
            .then((res) => {
              setPosts((posts) => [...posts, ...res.data]);
            })
            .catch((err) => {
              console.log("Failed to load posts 60~80", err);
            })
        )
        .then(
          api
            .get("/posts?_start=80&_limit=15")
            .then((res) => {
              setPosts((posts) => [...posts, ...res.data]);
              setShowPosts(true);
            })
            .catch((err) => {
              console.log("Failed to load posts 80~95", err);
            })
        )
        .catch(() => {
          console.log("O erro chegou aqui");
        });
    };
    getPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts, showPosts }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostsContext);
  return context;
};
