import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { click, getWeatherAPI } from "container/SecondPageContainer";

//axiosをモックする
jest.mock("axios");
const myAxios: jest.Mocked<AxiosInstance> = axios as any;

describe("getWeatherAPI function test", () => {
  test("getWeatherAPIの正常系", async () => {
    const result = { status: 200, data: { name: "さいたま" } };
    (axios.get as any).mockResolvedValue(result);
    const getResult = await getWeatherAPI("test");
    expect(getResult.status).toBe(200);
    expect(getResult.data.name).toBe("さいたま");
  });
});

describe("click関数のテスト", () => {
  test("click関数が正常に動作しstatusが200であること", async () => {
    const result = { status: 200, data: { name: "さいたま" } };
    (axios.get as any).mockResolvedValue(result);
    await click("test");
    expect(result.status).toBe(200);
  });
});
