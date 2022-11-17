import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { EApiState } from "../../types/common";
import { IUser } from "../../types/user";
import { IRootState } from "../store";
import { fetchUsers } from "./userApi";

export interface IUserState {
  value: IUser[];
  status?: EApiState;
}

const initialState: IUserState = {
  value: [],
};

export const fetchUsersAsync = createAsyncThunk("user/fetchUser", async () => {
  const response = await fetchUsers();
  console.log({ response });
  return response?.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        state.status = EApiState.LOADING;
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.status = EApiState.IDLE;
        state.value = action.payload;
      });
  },
});

export const selectUser = (state: IRootState) => state.user;

export default userSlice.reducer;
