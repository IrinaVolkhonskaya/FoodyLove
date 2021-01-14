import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as selectors from '../../redux/userSelectors';

//если мартшрут защищенный(приватный) и пользователь залогинен, рендерит компонент
// в противном случае рендерит Redirect на /signin

// const ProtectedRoute = ({
//   component: Component,
//   redirectTo = '/signin',
//   isAuthenticated,
//   ...rest
// }) => (
//   <Route
//     {...rest}
//     render={props => //props - это пропы Route (match, location, hystory)
//       isAuthenticated ? (
//         <Component {...props} />
//       ) : (
//         <Redirect
//           to={{
//             pathname: redirectTo,
//             state: { from: props.location }
//           }}
//         />
//       )
//     }
//   />
// );

// const mapState = state => ({
//   isAuthenticated: selectors.isAuthenticated(state),
// });

// export default connect(mapState)(ProtectedRoute);

export default function ProtectedRoute({
  redirectTo = '/signin',
  isAuthenticated,
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(selectors.isAuthenticated);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
