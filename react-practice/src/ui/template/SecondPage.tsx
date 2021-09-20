import React, { useState } from "react";
import { Header } from "ui/atom/Header";
import { Footer } from "ui/atom/Footer";
import {
  SecondFieldComponent,
  SecondFieldComponentInterface,
} from "ui/organism/SecondFieldComponent";
import { DialogWapper, DialogWapperInterface } from "ui/atom/Dialog";

import { currentWeather } from "store/currentWeather";
import { DialogState } from "store/dialogState";

export interface SecondPageInterface {
  currentWeather?: currentWeather;
  dialogState: DialogState;
}

export const SecondTemplate = (props: SecondPageInterface) => {
  const organismProps: SecondFieldComponentInterface = {
    currentWeather: props.currentWeather,
  };
  const DialogWapperProps: DialogWapperInterface = {
    dialogState: props.dialogState,
  };

  return (
    <>
      <Header />
      <p>templatedummy</p>
      <SecondFieldComponent {...organismProps}></SecondFieldComponent>
      <DialogWapper {...DialogWapperProps}></DialogWapper>
      <Footer />
    </>
  );
};
