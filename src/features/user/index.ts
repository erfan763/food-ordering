import { Action, AnyAction, createSlice } from "@reduxjs/toolkit";
// import { setToken, removeToken } from "@/utils/token";
import { RootState, useAppSelector } from "@/store";
import { getMeThunk, loginThunk, registerThunk } from "./asyncThunks";

const initialState: IInitialState = { user: null, status: "idle", error: "" };
interface IInitialState {
  status: "Authorized" | "Unauthorized" | "loading" | "idle";
  user?: any | null;
  token?: string | null;
  error: string;
}

const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    logout(state) {},
  },
  extraReducers(builder) {
    builder
      .addCase(getMeThunk.fulfilled, (state, action) => {})
      .addCase(loginThunk.fulfilled, (state, action) => {})
      .addCase(registerThunk.fulfilled, (state, action) => {});
  },
});

export const selectUser = (state: RootState) => state.user;
export const useSession = () => {
  const user = useAppSelector(selectUser);

  return user.user ? user.user : null;
};
export const { logout } = userSlice.actions;
export default userSlice.reducer;
