import React from 'react';

const AppNav = ({ menu, about, contacts, delivery }) => (
  <React.Fragment>
    <nav className="navbar">
      <a className="menu" href="/">
        {menu}
      </a>
      <a className="about" href="/">
        {about}
      </a>
      <a className="contacts" href="/">
        {contacts}
      </a>
      <a className="delivery" href="/">
        {delivery}
      </a>
    </nav>
  </React.Fragment>
);

export default AppNav;
