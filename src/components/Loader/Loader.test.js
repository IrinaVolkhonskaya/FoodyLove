import React from "react";
import Loader from "./Loader.tsx";

import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Logo />", () => {
  it("render correctly Loader component", () => {
    const LoaderComponent = shallow(<Loader />);
    expect(LoaderComponent).toMatchSnapshot();
  });

  it("check h1 container by default", () => {
    const LoaderComponent = shallow(<Loader />);
    expect(LoaderComponent.find("h1").text()).toEqual("Loading...");
  });
});
