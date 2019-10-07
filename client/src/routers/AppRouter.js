import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../components/pages/Home';
import Portraits from '../components/pages/Portraits'
import Pricing from '../components/pages/Pricing';
import Natural from '../components/pages/Natural';
import SocialMedia from '../components/pages/SocialMedia'
import NotFoundPage from '../components/pages/NotFoundPage';

const AppRouter = () => (
  <Router >
    <>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Route path="/portraits" component={Portraits} />
        <Route path="/natural" component={Natural} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/social-media" component={SocialMedia} />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  </Router>
)

export default AppRouter;