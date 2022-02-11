import React from "react";
import { Header } from "ui/atom/Header";
import { Footer } from "ui/atom/Footer";
import { FieldComponent } from "ui/organism/FieldComponent";
/**
 * TopPageTemplate
 */

export const TopPageTemplate = () => {
  return (
    <>
      <Header />
      <FieldComponent />
      <Footer />
    </>
  );
};
