// ON HOOKS
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as selectors from '../../redux/userSelectors';

export default function PublicRoute({
  redirectTo = 'menu',
  isAuthenticated,
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(selectors.isAuthenticated);
  return (
    <Route {...routeProps}>
      {isLoggedIn && routeProps.restricted ? <Redirect to={redirectTo} /> : children}
    </Route>
  );
}

// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import * as selectors from '../../redux/userSelectors';

// //если маршрут ограниченный , и пользоватекль залогинен, рендерит редирект на /menu
// //иначе рендерит компонент

// const PublicRoute = ({
//     component: Component,
//     isAuthenticated,
//     ...routeProps
// }) => (
//     <Route
//     {...routeProps}
//     render={props =>
//     isAuthenticated && routeProps.restricted ? ( //если пользователь авторизован и маршрут ограниченный
//         <Redirect to="menu" />
//     ) : (
//         <Component {...props} />
//     )}
//     />
// );

// const mapState = state => ({
//     isAuthenticated: selectors.isAuthenticated(state),
// });

// export default connect(mapState)(PublicRoute);
