import React, { useEffect, useState } from "react";

export const Counter = () => {
  //基本的な書き方 [保持する変数名,状態を変更するための関数]=useState(初期値)
  const [count, setCounter] = useState<number>(0);
  useEffect(() => {
    //第2引数がないので初期表示のみ（書き方的にはアンチパターン？？）
    console.log(`レンダリング`);
  }, []);

  const handleClick = () => {
    console.log("click");
    //省略した書き方
    setCounter((c) => c + 1);
  };
  return (
    <div>
      <div>Counter</div>
      <div>保持しているCounter：{count}</div>

      <button onClick={handleClick}>Count+1</button>
    </div>
  );
};
