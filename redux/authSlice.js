import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: '',
  userId: '',
  isAuth: false,
  rememberMe: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.token = action.payload.token;
      state.userId = action.payload.userId;
      if (state.rememberMe) {
        localStorage.setItem(
          'user',
          JSON.stringify({
            token: action.payload.token,
            userId: action.payload.userId,
          }),
        );
      } else {
        sessionStorage.setItem(
          'user',
          JSON.stringify({
            token: action.payload.token,
            userId: action.payload.userId,
          }),
        );
      }
      state.isAuth = true;
    },

    checkUser: (state) => {
      const userStorage = JSON.parse(localStorage.getItem('user')) || JSON.parse(sessionStorage.getItem('user'));
      if (!userStorage || !userStorage.token) {
        state.isAuth = false;
        state.token = null;
        return;
      }

      state.isAuth = true;
      state.token = userStorage.token;
      state.userId = userStorage.userId;
    },

    logout: (state) => {
      if (state.rememberMe) {
        localStorage.clear();
      } else {
        sessionStorage.clear();
      }
      state.token = null;
      state.isAuth = false;
    },
    toggleRememberMe: (state) => {
      state.rememberMe = !state.rememberMe;
    },
  },
});

export const { setUser, toggleRememberMe, logout, checkUser } = authSlice.actions;
export default authSlice.reducer;
