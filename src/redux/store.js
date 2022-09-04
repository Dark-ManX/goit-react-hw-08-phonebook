import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import auth from './auth';
import { authAPI } from './authAPI';
import { contactsAPI } from './contactsAPI';
import filter from './filter';

const persistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['token'],
};

const persistedUserReducer = persistReducer(persistConfig, auth);

export const store = configureStore({
  reducer: {
    [contactsAPI.reducerPath]: contactsAPI.reducer,
    filter,
    auth: persistedUserReducer,
    [authAPI.reducerPath]: authAPI.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(contactsAPI.middleware)
      .concat(authAPI.middleware),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);
