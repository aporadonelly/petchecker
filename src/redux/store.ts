import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';

import rootReducer from '@/redux/reducers';
import middlewares from '@/redux/middlewares';
import listenerMiddleware from '@/redux/listener-middleware';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(middlewares)
      .prepend(listenerMiddleware.middleware),
  devTools: true,
  preloadedState: {},
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
