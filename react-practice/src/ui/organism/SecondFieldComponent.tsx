import React, { useState } from "react";

import { ButtonWapper, ButtonWapperInterface } from "ui/atom/Button";
import { TextWapper, TextWapperInterface } from "ui/atom/Text";
import { PaperWapper } from "ui/atom/Paper";

import store from "store/store";
import { openDialog } from "store/dialogState";
import { click } from "container/SecondPageContainer";

/**
 * FieldComponent
 */

export const SecondFieldComponent = () => {
  console.log("render Field");
  //都市名
  const [cityName, setCityName] = useState<string>("");

  const onClick = () => {
    click(cityName);
    store.dispatch(openDialog({ state: true }));
  };

  /**
   * propsの書き方
   * XXX ={props.XXX}と一個一個記載していく
   * まとめての場合は {...prop}と記載する
   *
   */

  //検索ボタン
  const buttonWapperProps: ButtonWapperInterface = {
    buttonName: "Search",
    test: "test",
    onClick: onClick,
  };
  //戻るボタン
  const backButtonWapperProps: ButtonWapperInterface = {
    buttonName: "back",
    test: "test",
    onClick: onClick,
  };
  const textWapperProps: TextWapperInterface = {
    setCityName: setCityName,
  };

  return (
    <>
      <div className="secondmain">
        <TextWapper {...textWapperProps} />
        <ButtonWapper {...buttonWapperProps} />
        <PaperWapper />
        <ButtonWapper {...backButtonWapperProps} />
        <p></p>
      </div>
    </>
  );
};
