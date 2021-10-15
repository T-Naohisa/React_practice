import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

//apiのresponse型定義
export type Datatype = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [{ id: number; main: string; description: string; icon: string }];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

//stateの型定義
export type currentWeather = {
  currenctWeatherData?: Datatype;
};

//初期値
const initialState: currentWeather = {};

//sliceの作成
export const currentWatherSlice = createSlice({
  name: "currentWeather",
  initialState,
  reducers: {
    setCurrentWeather: (
      state = initialState,
      action: PayloadAction<Datatype>
    ) => ({
      ...state,
      currenctWeatherData: action.payload,
    }),
  },
});

//actionのexport
export const { setCurrentWeather } = currentWatherSlice.actions;

//currentWeatherを選択できるようにルートstateを定義
export const selectCurrentWeather = (state: RootState) => state.currentWather;

// export default currentWatherSlice.reducer;
