import { api } from "../services/api";
import { createContext, useEffect } from "react";
import { useContext, useState } from "react";
import { listPostCommentaries } from "../services/commentary";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = () => {
      api
        .get("/posts?_start=0&_limit=20")
        .then((res) => {
          Promise.all(listPostCommentaries(res.data)).then(
            (postWithCommentaries) => {
              setPosts(postWithCommentaries);
              setIsLoading(false);
            }
          );

          // api
          //   .get("/posts?_start=20&_limit=20")
          //   .then((res) => {
          //     setPosts((posts) => [...posts, ...res.data]);

          //     api
          //       .get("/posts?_start=40&_limit=20")
          //       .then((res) => {
          //         setPosts((posts) => [...posts, ...res.data]);

          //         api
          //           .get("/posts?_start=60&_limit=20")
          //           .then((res) => {
          //             setPosts((posts) => [...posts, ...res.data]);

          //             api
          //               .get("/posts?_start=80&_limit=15")
          //               .then((res) => {
          //                 setPosts((posts) => [...posts, ...res.data]);
          //               })
          //               .finally(() => {
          //                 setIsLoading(false);
          //               });
          //           })
          //           .catch((err) => {
          //             console.log(err.toJSON());
          //           });
          //       })
          //       .catch((err) => {
          //         console.log(err.toJSON());
          //       });
          //   })
          //   .catch((err) => {
          //     console.log(err.toJSON());
          //   });
        })
        .catch((err) => {
          console.log(err.toJSON());
        });
    };
    getPosts();
  }, []);
  console.log(posts);
  return (
    <PostsContext.Provider value={{ posts, isLoading }}>
      {children}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostsContext);
  return context;
};
