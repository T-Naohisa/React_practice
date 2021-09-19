import React, { useState } from "react";
import { Header } from "ui/atom/Header";
import { Footer } from "ui/atom/Footer";
import { SecondFieldComponent } from "ui/organism/SecondFieldComponent";
import { DialogWapper } from "ui/atom/Dialog";

export const SecondTemplate = () => {
  return (
    <>
      <Header />
      <p>templatedummy</p>
      <SecondFieldComponent></SecondFieldComponent>
      <DialogWapper></DialogWapper>
      <Footer />
    </>
  );
};
