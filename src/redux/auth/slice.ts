import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { PURGE } from 'redux-persist';

import { RootState } from '@/redux/store';
import { Auth } from '@/schemas/auth';
import { User } from '@/schemas/user';
import { authApi } from '@/redux/auth/api';
import { userApi } from '@/redux/user/api';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {} as Nullable<
    Auth<{
      user: User;
    }>
  >,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(PURGE, (state) => {
      state.token = null;
      state.user = null;
    });
    builder.addMatcher(userApi.endpoints.getUser.matchRejected, (state) => {
      state.token = null;
      state.user = null;
    });
    builder.addMatcher(userApi.endpoints.getUser.matchFulfilled, (state, action) => {
      state.user = action.payload.data;
    });
    builder.addMatcher(
      isAnyOf(authApi.endpoints.login.matchFulfilled, authApi.endpoints.verifyEmail.matchFulfilled),
      (state, action) => {
        state.token = action.payload.data.token;
      }
    );
  },
});

export const selectToken = (state: RootState) => state.auth.token;

export const selectUser = (state: RootState) => state.auth.user;
