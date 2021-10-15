import React, { useState } from "react";
import { ButtonWapper, ButtonWapperInterface } from "ui/atom/Button";
import { TextWapper, TextWapperInterface } from "ui/atom/Text";
import { TableWapper, tableWapperInterface } from "ui/atom/table";
import { threeHourForecast } from "store/threeHourForecast";

import { click } from "container/ThridPageContainer";

export interface ThirdFieldComponentinterface {
  threeHourForecast?: threeHourForecast;
}

export const ThirdFieldComponent = (props: ThirdFieldComponentinterface) => {
  //都市名
  const [cityName, setCityName] = useState<string>("");
  const onClick = () => {
    click(cityName);
  };

  //検索ボタン
  const buttonWapperProps: ButtonWapperInterface = {
    buttonName: "Search",
    test: "test",
    onClick: onClick,
  };
  const textWapperProps: TextWapperInterface = {
    setCityName: setCityName,
  };

  const tableWapperprops: tableWapperInterface = {
    threeHourForecast: props.threeHourForecast,
  };

  return (
    <>
      <div className="thridmain">
        <TextWapper {...textWapperProps} />
        <ButtonWapper {...buttonWapperProps} />
        <TableWapper {...tableWapperprops}></TableWapper>
      </div>
    </>
  );
};
