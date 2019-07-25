import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { FilmsContainer } from './containers/FilmsContainer';
import { DetailsContainer } from './containers/DetailsContainer';

export const MainRouter = () => (
  <Router>
    <Route path="/" exact component={FilmsContainer} />
    <Route path="/details/:id" component={DetailsContainer} />
  </Router>
);

export default MainRouter;
