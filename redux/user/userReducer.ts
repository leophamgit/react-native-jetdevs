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
  return response?.data;
});

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const userId: string = action?.payload;
      const users: IUser[] = [...state.value];
      const foundUserIndex: number = users.findIndex(
        (user) => user?.login?.uuid === userId
      );
      const foundUser: IUser = users[foundUserIndex];

      users[foundUserIndex] = {
        ...foundUser,
        isFavorite: !foundUser?.isFavorite,
      };

      state.value = users;
    },
  },
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

export const { toggleFavorite } = userSlice.actions;
export const selectUser = (state: IRootState) => state.user;

export default userSlice.reducer;
