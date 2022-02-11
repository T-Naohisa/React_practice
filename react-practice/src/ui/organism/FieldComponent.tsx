import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Button from "@mui/material/Button";

import { LinkComponent, LCInterfalce } from "ui/atom/LinkLabel";

// 2ページのリンク情報
const currentweather: LCInterfalce = {
  LinkDestination: "/currentweather",
  LinkText: "currentweather",
};

// 3ページのリンク情報
const forecasteachthreehours: LCInterfalce = {
  LinkDestination: "/forecasteachthreehours",
  LinkText: "forecasteachthreehours",
};

/**
 * FieldComponent
 */

export const FieldComponent = () => {
  const history = useHistory();
  const onclick = () => {
    console.log("click");
    history.push("/testpage");
  };
  return (
    <>
      <p className="topPageText">練習用の画面作成</p>
      <LinkComponent {...currentweather} />
      <LinkComponent {...forecasteachthreehours} />
      <Button variant="contained" onClick={onclick}>
        Contained
      </Button>
    </>
  );
};
