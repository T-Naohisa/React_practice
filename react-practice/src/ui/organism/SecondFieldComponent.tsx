import React, { useState } from "react";
import { ButtonWapper, ButtonWapperInterface } from "ui/atom/Button";
import { TextWapper, TextWapperInterface } from "ui/atom/Text";
import { PaperWapper } from "ui/atom/Paper";
import { click } from "container/SecondPageContainer";

/**
 * FieldComponent
 */

export const SecondFieldComponent = () => {
  console.log("render Field");
  //都市名
  const [cityName, setCityName] = useState<string>("");

  /**
   * propsの書き方
   * XXX ={props.XXX}と一個一個記載していく
   * まとめての場合は {...prop}と記載する
   *
   */
  const buttonWapperProps: ButtonWapperInterface = {
    name: "Search",
    test: "test",
    onClick: click,
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
        <p></p>
      </div>
    </>
  );
};
