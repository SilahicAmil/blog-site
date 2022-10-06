import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
  },
});

export const store = configureStore({ reducer: { auth: authSlice.reducer } });
