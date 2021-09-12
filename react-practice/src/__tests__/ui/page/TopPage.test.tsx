import React from "react";
import renderer from "react-test-renderer";
import { TopPage } from "ui/page/TopPage";
import { BrowserRouter as Router } from "react-router-dom";

it("render correctly", () => {
  const tree = renderer
    .create(
      <Router>
        <TopPage />
      </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
