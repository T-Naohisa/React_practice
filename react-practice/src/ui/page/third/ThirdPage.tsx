import React from "react";
import { useSelector } from "react-redux";
import {
  ThirdPageTemplate,
  ThirdPageInterface,
} from "ui/template/ThirdTemplate";
import { threeHourSelector } from "selector/selector";

export const ThirdPage = () => {
  const threeHour = useSelector(threeHourSelector);
  const props: ThirdPageInterface = {
    threeHourForecast: threeHour,
  };
  return (
    <>
      <ThirdPageTemplate {...props} />
    </>
  );
};
