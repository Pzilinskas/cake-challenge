import React, { Component } from 'react';
import{ BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Cakes from './containers/cakeContainer';
import Cake from './components/Cake';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App container-fluid">
       <Router>
         <Switch>
             <Route path="/" component={Cakes} />
             <Route path="/cake:id" component={Cake} />
         </Switch>
       </Router>
      </div>
    );
  }
}

export default App;
