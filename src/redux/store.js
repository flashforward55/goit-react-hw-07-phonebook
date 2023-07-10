import { configureStore } from '@reduxjs/toolkit';
import * as rp from 'redux-persist'
import { contactReducer } from './contactSlice';

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [rp.FLUSH, rp.REHYDRATE, rp.PAUSE, rp.PERSIST, rp.PURGE, rp.REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = rp.persistStore(store);
