import { createSlice } from '@reduxjs/toolkit';
import { authAPI } from './authAPI';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const initialState = {
  name: null,
  email: null,
  token: null,
  isLoggedIn: false,
};

export const auth = createSlice({
  name: 'user',
  initialState,
  reducers: {},

  extraReducers: builder => {
    builder.addMatcher(
      authAPI.endpoints.logIn.matchFulfilled,

      (state, { payload }) => {
        const { user, token } = payload;

        state.email = user.email;
        state.name = user.name;
        state.token = token;
        state.isLoggedIn = true;
      }
    );

    builder.addMatcher(
      authAPI.endpoints.getCurrentUser.matchFulfilled,

      (state, { payload }) => {
        const { email, name } = payload;

        state.email = email;
        state.name = name;
        state.isLoggedIn = true;
      }
    );

    // builder.addMatcher(
    //   authAPI.endpoints.getCurrentUser.matchRejected,

    //   (state, { payload }) => {
    //     if (payload.status === 401) {
    //       return (state.token = initialState.token);
    //     }
    //   }
    // );

    builder.addMatcher(
      authAPI.endpoints.logOut.matchFulfilled,

      (state, { payload }) => {
        state.email = initialState.email;
        state.name = initialState.name;
        state.token = initialState.token;
        state.isLoggedIn = initialState.isLoggedIn;
      }
    );
  },
});

console.log(initialState);

export const { registrationSuccess, loginSuccess, getCurrentUserSuccess } =
  auth.actions;
export default auth.reducer;
