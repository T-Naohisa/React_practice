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
  console.log("OK:" + cityName);
  const result: AxiosResponse<Datatype> = await getWeatherAPI(cityName);
  store.dispatch(closeDialog({ state: false }));
  if (result.status === 200) {
    //正常
    //storeに格納する store.dispatch(action)
    store.dispatch(setCurrentWeather(result.data));
    return "success";
  } else if (result.status === 404) {
    //認証エラー
    return "error";
  } else if (result.status === 401) {
    //検索結果エラー
    return "error";
  } else {
    //エラー
    return "error";
  }
};

//天気情報を取得する非同期通信部分（仮置き）
export const getWeatherAPI = async (cityName: string) => {
  const url = process.env.REACT_APP_WEATHER_API_URL!;
  const params = { q: cityName, appid: process.env.REACT_APP_WEATHER_API_KEY! };

  const response: AxiosResponse<Datatype> = await axios.get(url, { params });
  console.log(`レスポンスステータス：${response.status}`);
  return response;
};
