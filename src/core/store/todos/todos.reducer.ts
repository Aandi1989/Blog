import { initialTodoState } from "./todos.initial-state";
import { createReducer } from "@reduxjs/toolkit";
import * as AsyncActions from "./todos.thunks";
import * as Actions from "./todos.actions";

export const todosReducer = createReducer(initialTodoState, (builder) => {
  builder
    .addCase(Actions.cleanTodosAction, () => initialTodoState)
    .addCase(AsyncActions.getAllTodosThunk.pending, (state) => {
      state.isLoading = true;
    }) /*added*/
    .addCase(AsyncActions.getAllTodosThunk.fulfilled, (state, { payload }) => {
      state.todoIds = payload.mapIds;
      state.todoMap = payload.mapData;
      state.isLoading = false;
      // console.log("all--->", state.todoMap);
    }) /*added*/
    .addCase(AsyncActions.getAllTodosThunk.rejected, (state) => {
      state.isLoading = false;
    }) /*added*/
    .addCase(AsyncActions.getTodosByUserIdThunk.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(AsyncActions.getTodosByUserIdThunk.fulfilled, (state, { payload }) => {
      state.todoIds = payload.mapIds;
      state.todoMap = payload.mapData;
      state.isLoading = false;
      // console.log("byId--->", state.todoMap);
    })
    .addCase(AsyncActions.getTodosByUserIdThunk.rejected, (state) => {
      state.isLoading = false;
    });
});
