import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';

import HomeIndex from './components/index_home';
import UserLogin from './components/user/login';
import UserProfile from './components/user/profile';
import ResetPassword from './components/user/reset_password';
import requireAuth from './utils/authenticated';


//requireAuths!
const above = () => {
  console.log("hi mom"); //i need the auths to work :(
};


export default (
  <Route path="/"  component={App}>
    <IndexRoute component={HomeIndex} />
    <Route path="/login" component={UserLogin} />
    <Route path="/reset" component={ResetPassword} />
    <Route path="/profile" onEnter={above} component={UserProfile}  />
  </Route>

);
