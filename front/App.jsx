import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import store from './store/store';
import DonorReg from './components/DonorReg';
import DonorMain from './containers/DonorMain';
import LandingPage from './components/LandingPage';

const App = (props) => (
  <Provider store={store} >
    <Router history={browserHistory}>
      <Route path="/" component={LandingPage} />
      <Route path="/donor-registration" component={DonorReg} />
      <Route path="/donor/:id" component={DonorMain} />
    </Router>
  </Provider>
)

render(<App />, document.getElementById('app'));
