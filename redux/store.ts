import { configureStore } from "@reduxjs/toolkit";
import userReducer, { IUserState } from "./user/userReducer";

export interface IRootState {
  user: IUserState;
}

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
