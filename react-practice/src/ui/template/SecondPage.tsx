import React from "react";

import { Header } from "ui/atom/Header";
import { Footer } from "ui/atom/Footer";
import { SecondFieldComponent } from "ui/organism/SecondFieldComponent";
export const SecondTemplate = () => {
  return (
    <>
      <Header />
      <p>templatedummy</p>
      <SecondFieldComponent></SecondFieldComponent>
      <Footer />
    </>
  );
};
