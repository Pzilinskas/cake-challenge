import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Cake extends Component {

    componentDidMount(){
        this.props.userLoadsCake(this.props.match.match.params.id);
    }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
            <div className="row">
                <div className="col-sm-12 mt-2 mb-2">
                    <Link to="/" className="btn btn-outline-secondary">Go Back</Link>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-5">
                    <img src={this.props.currentCake.imageUrl}
                         className="img-fluid" alt={this.props.currentCake.name}/>
                </div>
                <div className="col-sm-7 text-left">
                    <h2>{this.props.currentCake.name}</h2>
                    <h5>Yumm factor: {this.props.currentCake.yumFactor}</h5>
                    <p>Comment:  {this.props.currentCake.comment}</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
export default  Cake; 