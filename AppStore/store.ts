import { configureStore } from "@reduxjs/toolkit";

import UserReducer from './Reducers/userSlice'

const store = configureStore({
  reducer: {
    Users: UserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;