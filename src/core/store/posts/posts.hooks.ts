import { useCallback } from "react";
import { getAllPostsThunk, getPostsByUserIdThunk } from "./posts.thunks";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, cleanPostsAction, postsSelector } from "@core/store";

export const usePostsApi = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, postsIds, postsMap } = useSelector(postsSelector);

  const getAllPosts = useCallback(() => {
    return dispatch(getAllPostsThunk());
  }, [dispatch]);

  const getPostsByUserId = useCallback(
    (id: string) => {
      return dispatch(getPostsByUserIdThunk(id));
    },
    [dispatch]
  );

  const cleanPosts = useCallback(() => {
    dispatch(cleanPostsAction());
  }, [dispatch]);

  return { getAllPosts, getPostsByUserId, cleanPosts, isLoading, postsIds, postsMap };
};
