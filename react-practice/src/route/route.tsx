import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { TopPage } from "ui/page/TopPage";
import { SecondPage } from "ui/page/SecondPage";
import { ThirdPage } from "ui/page/ThirdPage";
/**
 *
 */

export const WeatherAppRouter = () => {
  return (
    <Router>
      <Switch>
        {/* second */}
        <Route path="/currentweather">
          <SecondPage />
        </Route>
        {/* third */}
        <Route path="/forecasteachthreehours">
          <ThirdPage />
        </Route>
        {/* main */}
        <Route exact path="/">
          <TopPage />
        </Route>
      </Switch>
    </Router>
  );
};
