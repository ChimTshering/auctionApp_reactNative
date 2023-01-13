import { configureStore } from "@reduxjs/toolkit";

import UserReducer from './Reducers/userSlice'
import AuthReducer from './Reducers/auth'

const store = configureStore({
  reducer: {
    User: UserReducer,
    Auth:AuthReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;