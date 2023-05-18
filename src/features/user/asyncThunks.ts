import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMeThunk = createAsyncThunk(
  "user/getMeThunk",
  async (_, { rejectWithValue }) => {
    try {
      //   return await getMe();
    } catch (error: any) {
      return rejectWithValue(
        error?.data?.msg || error.data.error || "An error occurred"
      );
    }
  }
);
export const loginThunk = createAsyncThunk(
  "user/loginThunk",
  async (
    data: { login: string; password: string; recaptchaToken?: string | null },
    { rejectWithValue }
  ) => {
    try {
      //   return await login(data);
    } catch (error: any) {
      return rejectWithValue(
        error?.data?.msg || error.data.error || "An error occurred"
      );
    }
  }
);

export const registerThunk = createAsyncThunk(
  "user/registerThunk",
  async (data: { email?: string; phone?: string }, { rejectWithValue }) => {
    try {
      //   const resp = await register(data);
      //   return { ...resp, email: data.email, phone: data.phone };
    } catch (error: any) {
      return rejectWithValue(
        error?.data?.msg || error.data.error || "An error occurred"
      );
    }
  }
);
