import axios, { AxiosInstance, AxiosResponse } from "axios";
import { click, getWeatherAPI } from "container/SecondPageContainer";

//axiosをモックする
jest.mock("axios");
const myAxios: jest.Mocked<AxiosInstance> = axios as any;

describe("getWeatherAPI function test", () => {
  test("getWeatherAPIの正常系", async () => {
    const result = { status: 200, data: { name: "さいたま" } };
    myAxios.get.mockResolvedValue(result);

    // (axios.get as any).mockResolvedValue(result);
    const getResult = await getWeatherAPI("test");
    expect(axios.get).toBeCalledTimes(1);
    expect(getResult.status).toBe(200);
    expect(getResult.data.name).toBe("さいたま");
  });
});

describe("click関数のテスト", () => {
  test("click関数が正常に動作しstatusが200であること", async () => {
    const result = { status: 200, data: { name: "さいたま" } };
    myAxios.get.mockResolvedValue(result);
    // (axios.get as any).mockResolvedValue(result);
    await click("test");
    expect(axios.get).toBeCalledTimes(1);
  });

  test("click関数が正常に動作しstatusが400であること", async () => {
    const result = {
      response: {
        status: 400,
        data: { name: "さいたま" },
      },
    };
    // const result = { status: 400, data: { name: "さいたま" } };
    myAxios.get.mockRejectedValue(result);
    // (axios.get as any).mockRejectedValueOnce(result);
    await click("test");
    expect(axios.get).toBeCalledTimes(1);
  });

  test("click関数が正常に動作しstatusが404であること", async () => {
    const result = {
      response: {
        status: 404,
        data: { name: "さいたま" },
      },
    };
    myAxios.get.mockRejectedValue(result);
    // (axios.get as any).mockRejectedValueOnce(result);
    await click("test");
    expect(axios.get).toBeCalledTimes(1);
  });
});
