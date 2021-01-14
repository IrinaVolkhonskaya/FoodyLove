import React, { Component } from "react";
import { connect } from "react-redux";
import MenuList from "./MenuListView.tsx";
import { menuOperations } from "../../redux";
import * as selectors from "../../redux/selectors";
import actions from "../../redux/actionsCart.ts";

class MenuContainer extends Component {
  componentDidMount() {
    this.props.fetchMenu();
  }

  render() {
    return <MenuList {...this.props} />;
  }
}

const mapState = (state) => ({
  menu: selectors.getItemsAndCategory(state),
});

const mapDispatch = {
  fetchMenu: menuOperations.fetchMenu,
  addToCart: actions.addToCart,
};

export default connect(mapState, mapDispatch)(MenuContainer);
