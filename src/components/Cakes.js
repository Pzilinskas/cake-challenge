import React, { Component } from 'react';

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
          {cakes}
      </div>
    )
  }
}
export default Cakes;
