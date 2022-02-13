import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { FieldComponent } from "ui/organism/top/FieldComponent";
import { BrowserRouter as Router } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

//test毎に実施する前処理
// beforeEach(() => {});

//test毎に実施する後処理
// afterEach(() => {});

test("linkSecondPage Test", () => {
  const wrapper = mount(
    <Router>
      <FieldComponent />
    </Router>
  );
  expect(wrapper.find("Link").at(0).props().to).toBe("/currentweather");
});

test("linkThirdPage Test", () => {
  const wrapper = mount(
    <Router>
      <FieldComponent />
    </Router>
  );
  expect(wrapper.find("Link").at(1).props().to).toBe("/forecasteachthreehours");
});
