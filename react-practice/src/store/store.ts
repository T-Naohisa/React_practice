import { configureStore } from "@reduxjs/toolkit";
import { currentWatherSlice } from "./currentWeather";
import { dialogStateSlice } from "./dialogState";
import { threeHourForecastSlice } from "./threeHourForecast";

//大元のstore
export const store = configureStore({
  reducer: {
    currentWather: currentWatherSlice.reducer,
    dialogState: dialogStateSlice.reducer,
    threeHourForecast: threeHourForecastSlice.reducer,
  },
});

//stateの型を取り出す(RootState)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
