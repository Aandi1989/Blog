import { initialPostsState } from "./index";
import { createReducer } from "@reduxjs/toolkit";
import * as AsyncActions from "./posts.thunks";
import * as Actions from "./posts.actions";

export const postsReducer = createReducer(initialPostsState, (builder) => {
  builder
    .addCase(Actions.cleanPostsAction, () => initialPostsState)
    .addCase(AsyncActions.getAllPostsThunk.pending, (state) => {
      state.isLoading = true;
    }) //added
    .addCase(AsyncActions.getAllPostsThunk.fulfilled, (state, { payload }) => {
      state.postsIds = payload.mapIds;
      state.postsMap = payload.mapData;
      state.isLoading = false;
    }) //added
    .addCase(AsyncActions.getAllPostsThunk.rejected, (state) => {
      state.isLoading = false;
    }) //added
    .addCase(AsyncActions.getPostsByUserIdThunk.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(AsyncActions.getPostsByUserIdThunk.fulfilled, (state, { payload }) => {
      state.postsIds = payload.mapIds;
      state.postsMap = payload.mapData;
      state.isLoading = false;
    })
    .addCase(AsyncActions.getPostsByUserIdThunk.rejected, (state) => {
      state.isLoading = false;
    });
});
