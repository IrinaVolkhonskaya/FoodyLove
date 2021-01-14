import React, { lazy, Suspense, Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import AppHeader from './components/AppHeader/AppHeader.js';
import Loader from './components/Loader/Loader';
import * as operations from './redux/authOperations';
import './App.css';

import "semantic-ui-css/semantic.min.css";

import routes from './configs/routes';

const AsyncMenuPage = lazy(() =>
  import('./pages/Menu' /*webpackChunkName: "menu-page"*/),
);

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

const AsyncCartPage = lazy(() =>
  import('./pages/Cart' /*webpackChunkName: "cart-page"*/),
);

const AsyncSignInPage = lazy(() =>
  import('./pages/SignIn' /*webpackChunkName: "signIn-page"*/),
);

const AsyncSignUpPage = lazy(() =>
  import('./pages/SignUp' /*webpackChunkName: "signUp-page"*/),
);


class App extends Component {
  componentDidMount() {
    this.props.refreshCurrentUser();
  }

  render() {
    return (
      <div>
        <h2 className="header">FOODY LOVE</h2>

        <AppHeader />
        <Switch>
          <Suspense fallback={Loader}>
            <PublicRoute exact path={routes.MENU}>
              <AsyncMenuPage />
            </PublicRoute>

            <PublicRoute path={routes.MENU_ITEM}>
              <AsyncMenuItemPage />
            </PublicRoute>

            <PublicRoute path={routes.ABOUT}>
              <AsyncAboutPage />
            </PublicRoute>

            <PublicRoute path={routes.CONTACT}>
              <AsyncContactPage />
            </PublicRoute>

            <PublicRoute path={routes.DELIVERY}>
              <AsyncDeliveryPage />
            </PublicRoute>

            <ProtectedRoute path={routes.ACCOUNT}>
              <AsyncAccountPage />
            </ProtectedRoute>

            <ProtectedRoute path={routes.ORDER_HISTORY}>
              <AsyncOrderHistoryPage />
            </ProtectedRoute>

            <ProtectedRoute path={routes.CART} component={AsyncCartPage} />
            <Route
              path={routes.SIGNIN}
              restricted
              component={AsyncSignInPage}
            />
            <PublicRoute path={routes.SIGNUP} restricted>
              <AsyncSignUpPage />
            </PublicRoute>
          </Suspense>
        </Switch>

        <br />
      </div>
    );
  }
}

export default connect(null, {
  refreshCurrentUser: operations.refreshCurrentUser,
})(App);
