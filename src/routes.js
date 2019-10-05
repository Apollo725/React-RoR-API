import React from 'react'
import { Switch, Redirect } from 'react-router-dom';
import { ProtectedRoute, AuthRoute } from '../src/utils/RouteUtil';
import { Home, Login, Profile, Contacts } from './containers';
import Navigation from './components/Navigation';

const Routes = () => (
  <div className="app">
    <Navigation />
    <ProtectedRoute exact path="/" component={() => (<Redirect to="/home" />)} />
    <Switch>
      <AuthRoute exact path="/login" component={Login} />
      <ProtectedRoute exact path="/contacts" component={Contacts} />
      <ProtectedRoute exact path="/profile" component={Profile} />
      <ProtectedRoute exact path="/home" component={Home} />
    </Switch>
  </div>
)

export default Routes;
