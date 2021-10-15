import { createSelector } from "reselect";
import { selectCurrentWeather } from "store/currentWeather";
import { selectDialogState } from "store/dialogState";
import { selectThreeHourFerecast } from "store/threeHourForecast";
//天気情報を取得するselector
export const currentWeatherSelector = createSelector(
  selectCurrentWeather,
  (currentWeather) => {
    return currentWeather;
  }
);

//dialogのselector
export const dialogStateSelector = createSelector(
  selectDialogState,
  (dialogState) => {
    return dialogState;
  }
);

export const threeHourSelector = createSelector(
  selectThreeHourFerecast,
  (threeHourForecast) => {
    return threeHourForecast;
  }
);
