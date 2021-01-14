import React, { lazy, Suspense, Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import Loadable from 'react-loadable';

import AppHeader from './components/AppHeader/AppHeader';
import Loader from './components/Loader/Loader';
// import Auth from './Auth/Auth';

import menuJson from './server/menu.json';
import FilterList from './modules/menu/FilterList';
import MenuFilter from './modules/menu/MenuFilter';
import Menu from './modules/menu/Menu';

// import Modal from './Modal/Modal';
// import Tabs from './Tabs/Tabs';
// import tabsData from './components/Tabs/tabs.json';

import routes from './configs/routes';

// const AsyncMenuPage = Loadable({
//    loader: () => import('../pages/Menu' /*webpackChunkName: "menu-page"*/),
//    loading: Loader,
//    timeout: 5000,
//    delay: 300,
// });
const AsyncMenuPage = lazy(() =>
  import('./pages/Menu' /*webpackChunkName: "menu-page"*/),
);
// const AsyncMenuItemPage = Loadable({
//   loader: () => import('../pages/MenuItem' /*webpackChunkName: "menuItem-page"*/),
//   loading: Loader,
//   timeout: 5000,
//   delay: 300,
// });
const AsyncMenuItemPage = lazy(() =>
  import('./pages/MenuItem' /*webpackChunkName: "menuItem-page"*/),
);
const AsyncAboutPage = lazy(() =>
  import('./pages/About' /*webpackChunkName: "about-page"*/),
);
const AsyncContactPage = lazy(() =>
  import('./pages/Contact' /*webpackChunkName: "contact-page"*/),
);
const AsyncDeliveryPage = lazy(() =>
  import('./pages/Delivery' /*webpackChunkName: "delivery-page"*/),
);
const AsyncAccountPage = lazy(() =>
  import('./pages/Account' /*webpackChunkName: "account-page"*/),
);
const AsyncOrderHistoryPage = lazy(() =>
  import('./pages/OrderHistory' /*webpackChunkName: "orderHistory-page"*/),
);
const AsyncMealPlannerPage = lazy(() =>
  import('./pages/Planner' /*webpackChunkName: "mealPlanner-page"*/),
);

const filterMenu = (filter, menuJson) => {
  return menuJson.filter(menuItem =>
    menuItem.name.toLowerCase().includes(filter.toLowerCase()),
  );
};
// console.log(`filterMenu:`, filterMenu);

export default class App extends Component {
  state = {
    filter: '',
    menuJson,
    isModalOpen: false,
  };

  handleFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  };

  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { menuJson, filter, isModalOpen } = this.state;
    console.log('filter:', filter);
    const filteredMenu = filterMenu(filter, menuJson);

    return (
      <div>
        <h1>FOODY LOVE</h1>
        <AppHeader />

        <Switch>
          <Suspense fallback={Loader}>
            <Route exact path={routes.MENU} component={AsyncMenuPage} />
            <Route path={routes.MENU_ITEM} component={AsyncMenuItemPage} />
            <Route path={routes.ABOUT} component={AsyncAboutPage} />
            <Route path={routes.CONTACT} component={AsyncContactPage} />
            <Route path={routes.DELIVERY} component={AsyncDeliveryPage} />
            <Route path={routes.ACCOUNT} component={AsyncAccountPage} />
            <Route
              path={routes.ORDER_HISTORY}
              component={AsyncOrderHistoryPage}
            />
            <Route path={routes.PLANNER} component={AsyncMealPlannerPage} />
          </Suspense>
        </Switch>

        <div>
          {/* <button type="button" onClick={this.handleOpenModal}>
            Open Modal
          </button>
          {isModalOpen && (
            <Modal
              onClose={this.handleCloseModal}
              isModalOpen={this.state.isModalOpen}
            />
          )} */}
        </div>

        {/* <Tabs items={tabsData} />
        <br /> */}
        {/* <Auth /> */}
        <br />

        <MenuFilter filter={filter} onFilterChange={this.handleFilterChange} />
        <FilterList menuJson={filteredMenu} />
        <br />
        <Menu />
      </div>
    );
  }
}
