import React from "react";
import { useSelector } from "react-redux";
import { SecondTemplate, SecondPageInterface } from "ui/template/SecondPage";

import { currentWeatherSelector, dialogStateSelector } from "selector/selector";

export const SecondPage = () => {
  const currentWeather = useSelector(currentWeatherSelector);
  const dialogState = useSelector(dialogStateSelector);
  const props: SecondPageInterface = {
    currentWeather: currentWeather,
    dialogState: dialogState,
  };
  return (
    <>
      <SecondTemplate {...props} />
    </>
  );
};
