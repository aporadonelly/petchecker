import { createListenerMiddleware, isAnyOf } from '@reduxjs/toolkit';
import { REHYDRATE, PURGE } from 'redux-persist';

import { authApi } from '@/redux/auth/api';
import { userApi } from '@/redux/user/api';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  matcher: isAnyOf(
    authApi.endpoints.login.matchFulfilled,
    authApi.endpoints.verifyEmail.matchFulfilled
  ),
  effect: (_action, listenerApi) => {
    listenerApi.dispatch(userApi.endpoints.getUser.initiate());
  },
});

listenerMiddleware.startListening({
  type: REHYDRATE,
  effect: (_action, listenerApi) => {
    listenerApi.dispatch(userApi.endpoints.getUser.initiate());
  },
});

listenerMiddleware.startListening({
  type: PURGE,
  effect: (_action, listenerApi) => {
    listenerApi.dispatch(userApi.util.resetApiState());
  },
});

export default listenerMiddleware;
