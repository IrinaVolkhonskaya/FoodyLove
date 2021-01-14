import React from "react";
import MenuListView from "./MenuListView.tsx";
import { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

describe("MenuListView component", () => {
    it("should render MenuItemView component", () => {
        const component = shallow(<MenuListView />);
        expect(toJson(component)).toMatchSnapshot();
    });
})