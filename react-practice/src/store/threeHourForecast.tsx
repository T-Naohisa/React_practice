import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

export type threeHourListData = [
  {
    dt: number;
    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      sea_level: number;
      grnd_level: number;
      humidity: number;
      temp_kf: number;
    };
    weather: [{ id: number; main: string; description: string; icon: string }];
    clouds: { all: number };
    wind: { speed: number; deg: number; gust: number };
    visibility: number;
    pop: number;
    rain: { "3h": number };
    sys: { pod: number };
    dt_txt: string;
  }
];

export type threeHourDatatype = {
  cod: number;
  message: string;
  cnt: number;
  list: threeHourListData;
  city: {
    id: number;
    name: string;
    coord: { lat: number; lon: number };
    country: string;
    timezone: number;
    sunrise: number;
    sunset: number;
  };
};

//stateの型
export type threeHourForecast = {
  threeHourForecastData?: threeHourDatatype;
};

//初期値
const initialState: threeHourForecast = {};

//sliceの作成
export const threeHourForecastSlice = createSlice({
  name: "threeHourForecast",
  initialState,
  reducers: {
    setThreeHourForecast: (
      state = initialState,
      action: PayloadAction<threeHourDatatype>
    ) => ({ ...state, threeHourForecastData: action.payload }),
  },
});

//actionのexport
export const { setThreeHourForecast } = threeHourForecastSlice.actions;
export const selectThreeHourFerecast = (state: RootState) =>
  state.threeHourForecast;
