import React from "react";
import renderer from "react-test-renderer";
import { SecondPage } from "ui/page/second/SecondPage";
import { BrowserRouter as Router } from "react-router-dom";

it("render correctly", () => {
  const tree = renderer
    .create(
      <Router>
        <SecondPage />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
