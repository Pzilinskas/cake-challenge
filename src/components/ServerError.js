import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ServerError extends Component {
    render() {

        return (
            <div className="row">
              <div className="col-sm-12">
                  <h1>SERVER ERROR</h1>
                  <Link to="/" className="btn btn-outline-secondary" >Go to Home</Link>
              </div>
            </div>
        )
    }
}
export default ServerError;
