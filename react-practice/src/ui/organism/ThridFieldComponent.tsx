import React, { useState } from "react";
import { ButtonWapper, ButtonWapperInterface } from "ui/atom/Button";
import { TextWapper, TextWapperInterface } from "ui/atom/Text";
import { DenseTable } from "ui/atom/table";
export const ThirdFieldComponent = () => {
  //都市名
  const [cityName, setCityName] = useState<string>("");
  const onClick = () => {};

  //検索ボタン
  const buttonWapperProps: ButtonWapperInterface = {
    buttonName: "Search",
    test: "test",
    onClick: onClick,
  };
  const textWapperProps: TextWapperInterface = {
    setCityName: setCityName,
  };

  return (
    <>
      <div>ThirdFieldComponentdummy</div>
      <div className="thridmain">
        <TextWapper {...textWapperProps} />
        <ButtonWapper {...buttonWapperProps} />
        <DenseTable></DenseTable>
      </div>
    </>
  );
};
