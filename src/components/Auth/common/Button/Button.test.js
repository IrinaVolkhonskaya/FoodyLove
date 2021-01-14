import React from "react";
import Button from "./Button";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";

Enzyme.configure({ adapter: new Adapter() });

describe("Test Button component", () => {
  it("should click event", () => {
    const mockCallBack = jest.fn();

    const button = shallow(<Button onClick={mockCallBack}>Ok!</Button>);
    button.find("button").simulate("click");
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });

  
});
