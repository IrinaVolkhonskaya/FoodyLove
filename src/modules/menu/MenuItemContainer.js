// import React, { Component } from 'react';
import { connect } from "react-redux";
import MenuItemView from "./MenuItemView.tsx";
import selectors from "../../redux/selectors";

const mapState = (state, ownProps) => {
  const menuItem = selectors.getMenuItemById(state, ownProps.id);
  console.log(`ownProps.id:`, ownProps.id);
  return { ...menuItem };
};

export default connect(mapState)(MenuItemView);
