import React, { Component } from 'react';
import{ BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './Header';
import Cakes from './Cakes';
import Cake from './Cake';

class CakesHomePage extends Component {
    render() {
        return (
            <div className="App">
                <div className="container-fluid">
                    <Header/>
                    <Router>
                        <Switch>
                            <Route path="/cake/:id" render={(match) =>
                                <Cake userLoadsCake={this.props.userLoadsCake} match={match}
                                      isGettingCake={this.props.isGettingCake}
                                      getCakeInvalid={this.props.getCakeInvalid}
                                      currentCake={this.props.currentCake}
                                />
                            }
                            />
                            <Route path="/" render={() =>
                                <Cakes userLoadsCakes={this.props.userLoadsCakes}
                                       isGettingCakes={this.props.isGettingCakes}
                                       cakes={this.props.cakes}
                                />
                            }
                            />


                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}

export default CakesHomePage;
