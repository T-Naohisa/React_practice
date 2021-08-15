import React, { createContext, useEffect, useReducer, useState } from "react";
import { Action } from "redux";
import { ContextA } from "./ContextA";

export const UserContext = createContext<string | undefined>("");

//useReducer
//初期値
const initialState = 0;
//reducer関数
const reducerFunc = (constState: number, action: string) => {
  switch (action) {
    case "increment":
      return constState + 1;
    default:
      return constState;
  }
};

export const Counter = () => {
  //基本的な書き方 [保持する変数名,状態を変更するための関数]=useState(初期値)
  const [count, setCounter] = useState<number>(0);

  const [stateCount, dispatch] = useReducer(reducerFunc, initialState);

  //useEffect
  useEffect(() => {
    //第2引数がないので初期表示のみ（書き方的にはアンチパターン？？）
    console.log(`レンダリング`);
  }, []);

  const handleClick = () => {
    console.log("click");
    //省略した書き方
    setCounter((c) => c + 1);
  };
  const handleClick1 = () => {
    console.log("click");
    //省略した書き方
    dispatch("increment");
  };
  return (
    <div>
      <UserContext.Provider value={"User"}>
        <div>Counter</div>
        <div>保持しているCounter：{count}</div>
        <div>context表示</div>
        <ContextA />
        <button onClick={handleClick}>Count+1</button>
      </UserContext.Provider>
      <div>stateCount:{stateCount}</div>
      <button onClick={handleClick1}>stateCount+1</button>
    </div>
  );
};
