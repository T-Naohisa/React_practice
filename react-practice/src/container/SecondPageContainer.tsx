import axios, { AxiosResponse } from "axios";

import store from "store/store";
import { closeDialog } from "store/dialogState";
import { setCurrentWeather, Datatype } from "store/currentWeather";

/**
 * 検索ボタン押下時の処理
 *
 *
 */
export const click = async (cityName: string) => {
  // try {
  await getWeatherAPI(cityName)
    .then((res) => {
      store.dispatch(setCurrentWeather(res.data));
    })
    .catch((e) => {
      if (e.response.status === 400) {
        console.log("bad request");
      } else if (e.response.status === 404) {
        console.log("認証エラー");
      }
    })
    .finally(() => {
      store.dispatch(closeDialog({ state: false }));
    });
  //   const result: AxiosResponse<Datatype> = await getWeatherAPI(cityName);
  //   if (result.status === 200) {
  //     //正常
  //     //storeに格納する store.dispatch(action)
  //     store.dispatch(setCurrentWeather(result.data));
  //   }
  // } catch (error) {
  //   if (axios.isAxiosError(error)) {
  //     if (error.response?.status === 400) {
  //       console.log("bad request");
  //     } else if (error.response?.status === 404) {
  //       console.log("認証エラー");
  //     }
  //   }
  // } finally {
  //   store.dispatch(closeDialog({ state: false }));
  // }
  console.log("OK");
};

//天気情報を取得する非同期通信部分（仮置き）
export const getWeatherAPI = async (cityName: string) => {
  const url = process.env.REACT_APP_WEATHER_API_URL!;
  const params = {
    q: cityName,
    appid: process.env.REACT_APP_WEATHER_API_KEY!,
  };

  const response: AxiosResponse<Datatype> = await axios.get(url, {
    params,
  });
  return response;
};
