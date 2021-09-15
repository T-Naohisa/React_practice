import axios from "axios";

/**
 * 検索ボタン押下時の処理
 *
 *
 */
export const click = async (cityName: string) => {
  console.log("OK:" + cityName);
  // const result = await getWeatherAPI(cityName);
  // if (result.status === 200) {
  //   //正常
  // } else if (result.status === 404) {
  //   //認証エラー
  // } else {
  //   //エラー
  // }
};

//天気情報を取得する非同期通信部分（仮置き）
export const getWeatherAPI = async (cityName: string) => {
  const url = "";
  const params = { q: cityName };

  const response = await axios.get("url", { params });
  console.log(`レスポンスステータス：${response.status}`);
  return response;
};
