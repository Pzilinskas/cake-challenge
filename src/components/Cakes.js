import React, { Component } from 'react';

import Header from './Header';
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
          <div className="col-sm-12">
              <Header/>
              <div className="row">
                  {cakes}
              </div>
          </div>
      </div>
    )
  }
}
export default Cakes;
