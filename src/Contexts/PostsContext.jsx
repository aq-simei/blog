import { createContext, useEffect } from "react";
import { useContext, useState } from "react";
import { api } from "../services/api.js";

import { listPosts } from "../services/post.js";
import { listPostCommentaries } from "../services/commentary";

export const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const updatePosts = (incomingPosts) => {
    {!posts ? 
      setPosts(incomingPosts) : 
      setPosts((posts) => [...posts, ...incomingPosts]) } 
  }

  useEffect(() => {
    const firstRequestParams = {
      _start: 0,
      _limit: 20,
    };
    const secondRequestParams = {
      _start: 20,
      _limit: 20,
    };
    const thirdRequestParams = {
      _start: 40,
      _limit: 20,
    };
    const fourthRequestParams = {
      _start: 60,
      _limit: 20,
    };
    const fifthRequestParams = {
      _start: 80,
      _limit: 15,
    };
    const getPosts = () => {
      return listPosts(firstRequestParams)
        .then((res) => {
          Promise.all(listPostCommentaries(res.data)).then(
            updatePosts(res.data)
          );
          listPosts(secondRequestParams).then((res) => {
            Promise.all(listPostCommentaries(res.data)).then(
              updatePosts(res.data)
            );
            listPosts(thirdRequestParams).then((res) => {
              Promise.all(listPostCommentaries(res.data)).then(
                updatePosts(res.data)
              );

              listPosts(fourthRequestParams).then((res) => {
                Promise.all(listPostCommentaries(res.data)).then(
                  updatePosts(res.data)
                );

                listPosts(fifthRequestParams).then((res) => {
                  Promise.all(listPostCommentaries(res.data)).then(
                    updatePosts(res.data)
                  );
                })
                .catch((err) => {
                  console.log(err.toJSON());
              })
              }).finally(() => {setIsLoading(false)});
              
            });
          });
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
