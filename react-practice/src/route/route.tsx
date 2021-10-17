import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { TopPage } from "ui/page/top/TopPage";
import { SecondPage } from "ui/page/second/SecondPage";
import { ThirdPage } from "ui/page/third/ThirdPage";
import { TestPage } from "ui/page/testpage/testpage";

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
        <Route path="/testpage">
          <TestPage />
        </Route>
        {/* main */}
        <Route exact path="/">
          <TopPage />
        </Route>
      </Switch>
    </Router>
  );
};
