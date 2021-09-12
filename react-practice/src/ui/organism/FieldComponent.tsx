import React from "react";
import { Link } from "react-router-dom";

/**
 * FieldComponent
 */

export const FieldComponent = () => {
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
      </div>
    </>
  );
};
