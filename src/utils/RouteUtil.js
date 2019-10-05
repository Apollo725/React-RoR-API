import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const loggedIn = () => (localStorage.getItem('user') !== null);

export const AuthRoute = ({ component: Component, path, exact }) => (

  <Route path={path} exact={exact} render={(props) => (
    (!loggedIn()) ?
      (<Component {...props} />) :
      (<Redirect to="/" />)
  )} />

)

export const ProtectedRoute = ({ component: Component, path, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    (loggedIn()) ?
      (<Component {...props} />) :
      (<Redirect to="/login" />)
  )} />
)
