import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import Button from "@mui/material/Button";

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
      <div className="firstmain">
        <p className="firstText">初期画面のtop</p>
        <p>
          <Link to="/currentweather">currentweather</Link>
        </p>
        <p>
          <Link to="/forecasteachthreehours">forecasteachthreehours</Link>
        </p>
        <Button variant="contained" onClick={onclick}>
          Contained
        </Button>
      </div>
    </>
  );
};
