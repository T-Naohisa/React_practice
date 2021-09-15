import { configureStore } from "@reduxjs/toolkit";
import { currentWatherSlice } from "./currentWeather";

//大元のstore
export const store = configureStore({
  reducer: {
    currentWather: currentWatherSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
