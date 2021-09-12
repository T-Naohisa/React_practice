import React from "react";
import { ButtonWapper, ButtonWapperInterface } from "ui/atom/Button";
import { TextWapper } from "ui/atom/Text";
import { PaperWapper } from "ui/atom/Paper";
import { click } from "container/SecondPageContainer";

/**
 * FieldComponent
 */

export const SecondFieldComponent = () => {
  /**
   * propsの書き方
   * XXX ={props.XXX}と一個一個記載していく
   * まとめての場合は {...prop}と記載する
   *
   */
  const props: ButtonWapperInterface = {
    name: "Search",
    test: "test",
    onClick: click,
  };

  return (
    <>
      <div className="secondmain">
        <TextWapper />
        <ButtonWapper {...props} />
        <PaperWapper />
        <p></p>
      </div>
    </>
  );
};
