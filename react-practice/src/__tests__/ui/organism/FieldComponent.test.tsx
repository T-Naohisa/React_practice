import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { FieldComponent } from "ui/organism/FieldComponent";
import { BrowserRouter as Router, MemoryRouter } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });

//test毎に実施する前処理
// beforeEach(() => {});

//test毎に実施する後処理
// afterEach(() => {});

test("linkSecondPage Test", () => {
  global.window = Object.create(window);
  Object.defineProperty(window, "location", {
    value: {
      pathname: "/currentweather",
    },
    writable: true,
  });
  const wrapper = shallow(<FieldComponent />);
  const length = wrapper.find("p").length;
  console.log(length);
  const linkSecondPage = wrapper.find("p").at(1);
  expect(linkSecondPage.text()).toBe("currentweather");
  linkSecondPage.simulate("click");
  expect(window.location.pathname).toBe("/currentweather");
});

test("linkThirdPage Test", () => {
  global.window = Object.create(window);
  Object.defineProperty(window, "location", {
    value: {
      pathname: "/forecasteachthreehours",
    },
    writable: true,
  });
  const wrapper = shallow(<FieldComponent />);
  const length = wrapper.find("p").length;
  console.log(length);
  const linkSecondPage = wrapper.find("p").at(2);
  expect(linkSecondPage.text()).toBe("forecasteachthreehours");
  linkSecondPage.simulate("click");
  expect(window.location.pathname).toBe("/forecasteachthreehours");
});

test("Test", () => {
  const wrapper = mount(
    <Router>
      <FieldComponent />
    </Router>
  );
  const length = wrapper.find("Link").length;
  console.log(length);
  console.log(wrapper.find("Link").at(0).props().to);
  expect(wrapper.find("Link").at(0).props().to).toBe("/currentweather");
});
