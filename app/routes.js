import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import firebase from 'firebase';

import UserLogin from './components/user/login';
import UserProfile from './components/user/profile';
import ResetPassword from './components/user/reset_password';
import requireAuth from './utils/authenticated';


export default (
  <Route path="/"  component={App}>
    <IndexRoute component={UserProfile} />
    <Route path="/login" component={UserLogin} />
    <Route path="/reset" component={ResetPassword} />
    <Route path="/profile" onEnter={requireAuth} component={UserProfile}  />
  </Route>

);
