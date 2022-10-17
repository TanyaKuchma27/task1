import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { fetchUsers } from "./operations";

const usersAdapter = createEntityAdapter({
  selectId: (user) => user.id,
});

export const getUsers = usersAdapter.getSelectors((state) => state.users);

const usersSlice = createSlice({
  name: "users",
  initialState: usersAdapter.getInitialState({ isLoading: false, error: null }),
  reducers: {},
  extraReducers: {
    [fetchUsers.pending](state) {
      state.isLoading = true;
    },
    [fetchUsers.fulfilled](state, { payload }) {
      state.isLoading = false;      
      usersAdapter.setAll(state, payload);
    },
    [fetchUsers.rejected](state, action) {
      state.isLoading = false;
      state.error = action.error.message
    },
  },
});

export const usersReducer = usersSlice.reducer;