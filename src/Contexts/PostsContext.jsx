import { api } from "../services/api";
import { createContext, useEffect } from "react";
import { useContext, useState } from "react";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const getFirst20Posts = api.get("/posts?_start=0&_limit=20");
  const getSecond20Posts = api.get("/posts?_start=20&_limit=20");
  const getThird20Posts = api.get("/posts?_start=40&_limit=20");
  const getFourth20Posts = api.get("/posts?_start=60&_limit=20");
  const getLast15Posts = api.get("/posts?_start=80&_limit=15");

  useEffect(() => {
    const getPosts = () => {
      getFirst20Posts
        .then((res) => {
          setPosts(res.data);
        })
        .then(
          getSecond20Posts
            .then((res) => {
              setPosts((posts) => [...posts, ...res.data]);
            })
            .then(
              getThird20Posts.then((res) => {
                setPosts((posts) => [...posts, ...res.data]);
              })
            )
            .then(
              getFourth20Posts.then((res) => {
                setPosts((posts) => [...posts, ...res.data]);
              })
            )
            .then(
              getLast15Posts.then((res) => {
                setPosts((posts) => [...posts, ...res.data]);
              })
            )
            .catch((err) => {
              console.log(err);
            })
        );
    };
    getPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostsContext);
  return context;
};

// export const getPosts = () => {
//   Promise.all([
//     getFirst20Posts,
//     getSecond20Posts,
//     getThird20Posts,
//     getFourth20Posts,
//     getLast15Posts,
//   ]).then((values) => {
//     console.log(values);
//   });
// };
