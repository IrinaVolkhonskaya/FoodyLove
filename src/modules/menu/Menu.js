import React, { Component } from 'react';
import menuJson from '../../menu.json';

export default class Menu extends Component {
  state = {
    menuJson,
  };

  handleRenderMenuItem = () => {
    return this.state.menuJson.map(item => {
      const { id, image, price, name } = item; //destructuring
      return (
        <div className="menu" key={id}>
          <img
            className="menu-item"
            src={image}
            alt="some dish"
            width="250"
            height="200"
          />
          <div>{name}</div>
          <div>Price: {price} uah</div>
        </div>
      );
    });
  };


  render() {
    return (
      <div>
        <h2 id="title">Menu</h2>
        <div id="items">
          <div>{this.handleRenderMenuItem()}</div>
          {/* <div onChange={this.renderMenuItem}></div> //не рендерит */}
        </div>
      </div>
    );
  }
}
