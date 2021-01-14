import React from "react";
import Logo from "./Logo";

import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

describe("<Logo />", () => {
  it("should renders <Logo /> component", () => {
    const wrapper = shallow(<img className="logo" />);
    expect(wrapper.contains(<img className="logo" />)).toEqual(true);
  });

  it("should renders <Logo /> component with props", () => {
    const wrapper = shallow(<Logo width="100px" height="100px" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("should renders <Logo /> component without props", () => {
    const wrapper = shallow(<Logo />);
    expect(wrapper).toMatchSnapshot();
  });
});
