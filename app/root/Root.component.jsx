import React from 'react';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App.component';
import About from '../about';
import Shelf from '../shelf';

const Root = ({store}) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Shelf}/>
        <Route path="/about" component={About}/>
      </Route>
    </Router>
  </Provider>
);

export default Root;
