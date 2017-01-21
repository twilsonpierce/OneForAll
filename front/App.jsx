import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import DonorReg from './components/DonorReg';

const App = (props) => (
  <Router history={browserHistory}>
    <Route path="/donor-registration" component={DonorReg} />
  </Router>
)

render(<App />, document.getElementById('app'));
