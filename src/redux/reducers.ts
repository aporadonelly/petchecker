import { combineReducers } from '@reduxjs/toolkit';
import { PersistConfig, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { api } from '@/redux/api';
import { authSlice } from '@/redux/auth/slice';

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  [authSlice.name]: authSlice.reducer,
});

const persistConfig: PersistConfig<ReturnType<typeof rootReducer>> = {
  key: 'root',
  whitelist: [authSlice.name],
  storage,
};

export default persistReducer(persistConfig, rootReducer);
