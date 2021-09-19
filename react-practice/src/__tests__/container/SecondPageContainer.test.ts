import axios from "axios";
import { click, getWeatherAPI } from "container/SecondPageContainer";

/**
 * とりあえず書いてるけど
 * 微妙だからちゃんとした書き方調べる
 */
jest.mock("axios");
describe("getWeatherAPI function test", () => {
  //test前の前処理
  beforeEach(() => {});
  test("click function test 正常", async () => {
    const result = { status: 200, data: { name: "さいたま" } };
    (axios.get as any).mockResolvedValue(result);
    const getResult = await getWeatherAPI("test");
    expect(getResult.status).toBe(200);
    expect(getResult.data.name).toBe("さいたま");
  });
});

describe("click function test", () => {
  test("正常系", async () => {
    const result = { status: 200, data: { name: "さいたま" } };
    (axios.get as any).mockResolvedValue(result);
    await click("test");
    expect(result.status).toBe(200);
  });
  test("異常系", async () => {
    const result = { status: 404 };
    (axios.get as any).mockResolvedValue(result);
    await click("test");
    expect(result.status).toBe(404);
  });
  test("異常系 その他", async () => {
    const result = { status: 401 };
    (axios.get as any).mockResolvedValue(result);
    await click("test");
    expect(result.status).toBe(401);
  });
});
