import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { currentWeather } from "store/currentWeather";

/**
 * paperComponent
 */

export interface PaperWapperInterface {
  currentWeather?: currentWeather;
}

export const PaperWapper = (props: PaperWapperInterface) => {
  const display: boolean = true;

  return (
    <>
      {display && (
        <div className="paperwapper">
          <Box
            sx={{
              // display: "flex",
              // flexWrap: "wrap",
              "& > :not(style)": {
                m: 1,
                width: 1000,
                // height: 128,
              },
            }}
          >
            <Paper elevation={3}>
              <br />
              <p>取得結果</p>
              <div className="getweatherinfo">
                <p>都市名:{props.currentWeather?.currenctWeatherData?.name}</p>
                <p>
                  気温:{props.currentWeather?.currenctWeatherData?.main.temp}
                </p>
                <p>
                  {props.currentWeather?.currenctWeatherData?.weather[0]
                    .icon !== undefined && (
                    <img
                      src={`${process.env.REACT_APP_WEATHER_ICON_API_URL}${props.currentWeather?.currenctWeatherData?.weather[0].icon}.png`}
                      alt=""
                      width="50"
                      height="50"
                    ></img>
                  )}
                </p>
                <p>
                  体感気温:
                  {props.currentWeather?.currenctWeatherData?.main.feels_like}
                </p>
                <p>
                  最高気温:
                  {props.currentWeather?.currenctWeatherData?.main.temp_max}
                </p>
                <p>
                  最低気温:
                  {props.currentWeather?.currenctWeatherData?.main.temp_min}
                </p>
                <p>
                  気圧:
                  {props.currentWeather?.currenctWeatherData?.main.pressure}
                </p>
                <p>
                  湿度:
                  {props.currentWeather?.currenctWeatherData?.main.feels_like}
                </p>
                <p>
                  風速:
                  {props.currentWeather?.currenctWeatherData?.wind.speed}
                </p>
                <br />
              </div>
            </Paper>
          </Box>
        </div>
      )}
    </>
  );
};
