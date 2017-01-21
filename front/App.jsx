import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import DonorReg from './components/DonorReg';
import DonorMain from './components/DonorMain';

const App = (props) => (
  <Router history={browserHistory}>
    <Route path="/donor-registration" component={DonorReg} />
    <Route path="/donor/:id" component={DonorMain} />
  </Router>
)

render(<App />, document.getElementById('app'));
