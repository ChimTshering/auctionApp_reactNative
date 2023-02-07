import { configureStore } from "@reduxjs/toolkit";

import UserReducer from './Reducers/userSlice'
import AuctionReducer from "./Reducers/auctionSlice";

const store = configureStore({
  reducer: {
    User: UserReducer,
    acution:AuctionReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;