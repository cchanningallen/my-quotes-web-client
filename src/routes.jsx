import React from 'react';
import { Route, IndexRoute } from 'react-router'

import QuotesIndex from 'modules/QuotesIndex';
import AppRoot from 'modules/AppRoot';
import Home from 'modules/Home';

export default (
  <Route path="/" component={AppRoot}>
    <IndexRoute component={Home} />
    <Route path="quotes" component={QuotesIndex} />
  </Route>
)

