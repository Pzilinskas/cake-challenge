import React, { Component } from 'react';
import{ BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import CakesHomePage from './containers/cakesHomeContainer';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
             <Switch>
                 <Route path="/" component={CakesHomePage} />

             </Switch>
          </Router>
      </div>
    );
  }
}

export default App;
