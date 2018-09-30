  import React, { Component } from 'react';
  import { Link } from 'react-router-dom';

  class CakeListItem extends Component {

      render() {
          const linkUrl = "cake/" + this.props.cake.id;

      return (
          <div className="col-sm-3 mb-2 mt-2 d-flex">
              <div className="card mb-2">
              <img src={this.props.cake.imageUrl} className="img-fluid card-img-top" alt={this.props.cake.name}/>
              <h5 className="card-title ml-2 mr-2">{this.props.cake.name}</h5>
                  <Link to={linkUrl} className="btn btn-outline-primary ml-2 mr-2 "> Show more</Link>
              </div>
          </div>
      )
    }
  }
  export default CakeListItem;