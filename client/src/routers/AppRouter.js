import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomePage from '../components/pages/home/HomePage';
import PricingPage from '../components/pages/pricing/PricingPage';
import PortfolioPage from '../components/pages/portfolio/PortfolioPage';
import SchedulingPage from '../components/pages/scheduling/SchedulingPage';
import NotFoundPage from '../components/pages/NotFoundPage';
import HiddenSignInPage from '../components/pages/HiddenSignInPage';
import AddPicsPage from '../components/pages/AddPicsPage';

const AppRouter = () => {

  return (
    <Router >
      <>
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/scheduling" component={SchedulingPage} />
          <Route path="/pricing" component={PricingPage} />
          <Route path="/hi-darby" component={HiddenSignInPage} />
          <Route path="/add-pics" component={AddPicsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </>
    </Router>
  )
}

export default AppRouter;