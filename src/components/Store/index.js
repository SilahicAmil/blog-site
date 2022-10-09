import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticated: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const blogPostTextSlice = createSlice({
  name: "text",
  initialState: { blogsContent: [] },
  reducers: {
    addBlog(state, action) {
      const newBlogText = action.payload;
      state.blogsContent = [...state.blogsContent, newBlogText];
    },
  },
});

// Add an edit user reducer (possibly)

export const blogActions = blogPostTextSlice.actions;

export const authActions = authSlice.actions;

export const store = configureStore({
  reducer: { auth: authSlice.reducer, addBlog: blogPostTextSlice.reducer },
});
