import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  Login,
  Dashboard,
  Course,
  Discipline,
  Classes
} from './screens'

const AppRouter = () => (
  <Switch>
    <Route exact={true} path="/" component={() => <Login />} />
    <Route exact={true} path="/dashboard" component={() => <Dashboard />}/>
  </Switch>
)

export default AppRouter;