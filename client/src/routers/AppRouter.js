import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../components/pages/Home';
import RealEstate from '../components/pages/RealEstate'
import Pricing from '../components/pages/Pricing';
import Natural from '../components/pages/Natural';
import Scheduling from '../components/pages/Scheduling';
import NotFoundPage from '../components/pages/NotFoundPage';

const AppRouter = () => (
  <Router >
    <>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/real-estate" component={RealEstate} />
        <Route path="/natural" component={Natural} />
        <Route path="/scheduling" component={Scheduling} />
        <Route path="/pricing" component={Pricing} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  </Router>
)

export default AppRouter;