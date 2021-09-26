import React from "react";
import { Header } from "ui/atom/Header";
import { Footer } from "ui/atom/Footer";
import { ThirdFieldComponent } from "ui/organism/ThridFieldComponent";
export const ThirdPageTemplate = () => {
  return (
    <>
      <Header />
      <ThirdFieldComponent />
      <Footer />
    </>
  );
};
