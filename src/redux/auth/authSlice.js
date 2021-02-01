import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending]: state => {
      state.isLogIn = initialState.isLogIn;
    },
    [authOperations.register.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogIn = !initialState.isLogIn;
    },
    [authOperations.register.rejected]: state => {
      state.isLogIn = initialState.isLogIn;
    },

    [authOperations.logIn.pending]: state => {
      state.isLogIn = initialState.isLogIn;
    },
    [authOperations.logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogIn = !initialState.isLogIn;
    },
    [authOperations.logIn.rejected]: state => {
      state.isLogIn = initialState.isLogIn;
    },

    [authOperations.logOut.pending]: state => {
      state.isLogIn = !initialState.isLogIn;
    },
    [authOperations.logOut.fulfilled]: state => {
      state.user = initialState.user;
      state.token = initialState.token;
      state.isLogIn = initialState.isLogIn;
    },
    [authOperations.logOut.rejected]: state => {
      state.isLogIn = !initialState.isLogIn;
    },

    [authOperations.refreshCurrentUser.pending]: state => {
      state.isLogIn = initialState.isLogIn;
      state.isRefreshing = !initialState.isRefreshing;
    },
    [authOperations.refreshCurrentUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLogIn = !initialState.isLogIn;
      state.isRefreshing = initialState.isRefreshing;
    },
    [authOperations.refreshCurrentUser.rejected]: state => {
      state.isLogIn = initialState.isLogIn;
      state.isRefreshing = initialState.isRefreshing;
    },
  },
});

export default authSlice.reducer;
