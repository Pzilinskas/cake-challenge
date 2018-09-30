import React, { Component } from 'react';
import{ BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import Header from './Header';
import Cakes from './Cakes';
import Cake from './Cake';
import AddCake from './AddCake';
import ServerError from './ServerError';

class CakesHomePage extends Component {



    render() {
        if(this.props.serverError){
            return <Redirect to="/server-error/"/>
        }
        return (
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
                        <Route path="/add/" render={() =>
                            <AddCake userCreatesCake={this.props.userCreatesCake}
                                     isCreatingCake={this.props.isCreatingCake}
                                     createCakeInvalid={this.props.createCakeInvalid}
                                     createCakeSuccessful={this.props.createCakeSuccessful}
                            />
                        }
                        />
                        <Route path="/server-error/" component={ServerError}/>
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
        );
    }
}

export default CakesHomePage;
