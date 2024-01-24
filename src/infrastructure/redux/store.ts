import { configureStore } from '@reduxjs/toolkit';
import itemCartReducer from './itemCart/itemCartSlice';

export const store = configureStore({
  reducer: {
    item: itemCartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
