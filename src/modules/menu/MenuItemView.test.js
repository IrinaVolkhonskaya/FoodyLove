import React from "react";
import MenuItemView from "./MenuItemView";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

const setUp = (props) => shallow(<MenuItemView {...props} />);

describe("should render MenuItemView component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should contain .menuItem wrapper", () => {
    const wrapper = component.find(".menuItem");
    expect(wrapper.length).toBe(1);
  });

  it("should contain img", () => {
    const wrapper = component.find("img");
    expect(wrapper.length).toBe(1);
  });

});
