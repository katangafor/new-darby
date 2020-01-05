import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../components/pages/Home';
import RealEstate from '../components/pages/RealEstate'
import Pricing from '../components/pages/Pricing';
import Portfolio from '../components/pages/Portfolio';
import Scheduling from '../components/pages/Scheduling';
import NotFoundPage from '../components/pages/NotFoundPage';
import HiddenSignInPage from '../components/pages/HiddenSignInPage';
import AddPicsPage from '../components/pages/AddPicsPage';

const AppRouter = () => (
  <Router >
    <>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/real-estate" component={RealEstate} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/scheduling" component={Scheduling} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/hi-darby" component={HiddenSignInPage} />
        <Route path="/add-pics" component={AddPicsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  </Router>
)

export default AppRouter;