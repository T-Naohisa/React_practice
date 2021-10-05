import axios, { AxiosResponse } from "axios";

import store from "store/store";
import { closeDialog } from "store/dialogState";
import {
  setThreeHourForecast,
  threeHourDatatype,
} from "store/threeHourForecast";

/**
 * 入力された市名で検索、取得情報を格納する。
 * @param cityName 検索する市名
 */
export const click = async (cityName: string) => {
  try {
    console.log("OK:" + cityName);
    const result: AxiosResponse<threeHourDatatype> = await getThreeHourAPI(
      cityName
    );
    // store.dispatch(closeDialog({ state: false }));
    if (result.status === 200) {
      //storeに格納する store.dispatch(action)
      store.dispatch(setThreeHourForecast(result.data));
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 400) {
        console.log("bad request");
      } else if (error.response?.status === 404) {
        console.log("認証エラー");
      }
    }
  } finally {
    store.dispatch(closeDialog({ state: false }));
  }
};

/**
 * APIを実行し、レスポンス情報を返却する
 * @param cityName
 * @returns
 */
export const getThreeHourAPI = async (cityName: string) => {
  const url = process.env.REACT_APP_THREE_HOUR_FORECAST_DATA_API_URL!;
  const params = {
    q: cityName,
    appid: process.env.REACT_APP_WEATHER_API_KEY!,
  };

  const response: AxiosResponse<threeHourDatatype> = await axios.get(url, {
    params,
  });
  console.log(`レスポンスステータス：${response.status}`);
  return response;
};

/**
 * 渡されたunixtimeをフォーマットの形式に変換する
 * MM/dd (E) hh:mmの文字列
 * @param unixTime
 * @returns
 */
export const convertTimeFromUnix = (unixTime: number) => {
  const time = new Date(unixTime * 1000);
  const month = time.getMonth() + 1;
  const date = time.getDate();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const dayOfWeek = time.getDay();
  const dateOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"];

  return `${month}/${date} (${dateOfWeekStr[dayOfWeek]}) ${hour}:${minute}`;
};

/**
 * ケルビンを摂氏に変更する
 * @param kelvin
 * @returns
 */
export const convertCelsiusFromKelvin = (kelvin: number) => {
  const absoluteZero = -273.15;
  return (kelvin + absoluteZero).toFixed(1);
};
