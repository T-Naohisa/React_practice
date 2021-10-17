import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { BrowserRouter as Router } from "react-router-dom";
import { TopPage } from "ui/page/top/TopPage";

configure({ adapter: new Adapter() });
const mockedConsole = (console.log = jest.fn());

describe("unit test", () => {
  // testing libraryで書いた場合
  it("testing libraryでbutton click", async () => {
    const wrapper = render(
      <Router>
        <TopPage />
      </Router>
    );
    const WrapperButton = wrapper.getByText("Contained");
    fireEvent.click(WrapperButton);
    expect(mockedConsole).toBeCalledTimes(1);
    wrapper.unmount();
  });

  // enzymeで書いた場合
  it("enzymeでbutton click", () => {
    const wrapper = mount(
      <Router>
        <TopPage />
      </Router>
    );
    const WrapperButton = wrapper.find("button").at(0);
    WrapperButton.simulate("click");
    expect(mockedConsole).toBeCalledTimes(1);
    wrapper.unmount();
  });
});
