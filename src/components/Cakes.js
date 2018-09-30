import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import CakeListItem from './CakeListItem';

class Cakes extends Component {

    componentDidMount(){
        this.props.userLoadsCakes();
    }

  render() {
        let cakes;
      if(this.props.isGettingCakes){
          cakes = "Loading Yummy cakes!"
      }else if (this.props.cakes != null){
          cakes = this.props.cakes.map((cake, index) =>(
              <CakeListItem key={index} cake={cake}/>
          ))
      } else {
          cakes = "No Yummy cakes found";
      }

    return (
      <div className="row">
              <div className="col-sm-12 text-right mb-2 mt-2">
                  <Link to="/add/" className="btn btn-outline-secondary">Add Cake</Link>
              </div>
          {cakes}
      </div>
    )
  }
}
export default Cakes;
