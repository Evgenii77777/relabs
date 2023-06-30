import { createAction, createSlice } from "@reduxjs/toolkit";

import { getUsers } from "../async/get-users";

export const deleteUser = createAction("deleteUser");

export const usersReducer = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.users = action.payload.items;
    });
    builder.addCase(getUsers.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });
    builder.addCase(deleteUser, (state, { payload }) => {
      state.users = state.users.filter((user) => user.id !== payload);
    });
  },
});
