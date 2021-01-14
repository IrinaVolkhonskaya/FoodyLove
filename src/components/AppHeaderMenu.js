import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import UserMenu from './UserMenu';
import appLogo from '../images/logo.png';
import avatar from '../images/avatar.jpg';

const navItems = ['menu', 'about', 'contact', 'delivery'];

const AppHeaderMenu = () => (
  <header className="Header">
    <div className="Header__logo">
      <Logo image={appLogo} width={60} height={50} />
    </div>
    <div className="menu">
      <Navigation items={navItems} />
    </div>
    <div className="Header__usermenu">
        <UserMenu avatar={avatar} name="Katy Ross" />
    </div>
  </header>
);

export default AppHeaderMenu;
