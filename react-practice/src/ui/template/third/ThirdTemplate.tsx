import React from "react";
import { Header } from "ui/atom/Header";
import { Footer } from "ui/atom/Footer";
import { ThirdFieldComponent } from "ui/organism/ThridFieldComponent";
import { threeHourForecast } from "store/threeHourForecast";
import { ThirdFieldComponentinterface } from "ui/organism/ThridFieldComponent";

export interface ThirdPageInterface {
  threeHourForecast?: threeHourForecast;
}

export const ThirdPageTemplate = (props: ThirdPageInterface) => {
  const thirdFieldComponentProps: ThirdFieldComponentinterface = {
    threeHourForecast: props.threeHourForecast,
  };
  return (
    <>
      <Header />
      <ThirdFieldComponent {...thirdFieldComponentProps} />
      <Footer />
    </>
  );
};
