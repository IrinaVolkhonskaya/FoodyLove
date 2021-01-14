import React from 'react';
import Logo from './Logo';
import AppNav from './AppNav';
import UserMenu from './UserMenu';
import Navigation from './Navigation';
import appLogo from '../images/logo.png';
import avatar from '../images/avatar.jpg';

const navItems = ['menu', 'about', 'contact', 'delivery'];

const AppHeader = () => (
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

export default AppHeader;
