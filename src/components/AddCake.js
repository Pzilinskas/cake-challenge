import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';

class AddCake extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            imageUrl: '',
            comment: '',
            yumFactor: '',
            redirectToHome: false
        }
    }
    handleNameChange = (event) => {
        this.setState({name: event.target.value})
    }
    handleImageUrlChange = (event) => {
        this.setState({imageUrl: event.target.value})
    }
    handleCommentChange = (event) => {
        this.setState({comment: event.target.value})
    }
    handleYumFactorChange = (event) => {
        this.setState({yumFactor: event.target.value})
    }
    handleSubmitForm = (event) => {
        event.preventDefault();
        this.props.userCreatesCake(this.state.name, this.state.comment, this.state.imageUrl, this.state.yumFactor).then(() => {
            this.setState({redirectToHome: true});
        });
    }



    render() {

    return (
      <div className="row">
            {
                this.state.redirectToHome && this.props.createCakeSuccessful
                    ? <Redirect to="/" />
                    : null
            }
            {
              this.props.createCakeInvalid
                  ? 'Could not create cake'
                  :null
            }
            <form onSubmit={this.handleSubmitForm} className="col-sm-12">
                <div className="form-group row">
                    <label htmlFor="cake-name" className="col-sm-2 col-form-label">Cake Name</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control-plaintext" onChange={this.handleNameChange} placeholder="Please insert cake name" />
                    </div>
                </div>
                    <div className="form-group row">
                        <label htmlFor="cake-comment" className="col-sm-2 col-form-label">Cake Comment</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext" onChange={this.handleCommentChange} placeholder="Please insert cake comment" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="cake-image-url" className="col-sm-2 col-form-label">Cake Image Url</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control-plaintext" onChange={this.handleImageUrlChange} placeholder="Please insert cake image url" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="cake-yum-factor" min={1} max={5} className="col-sm-2 col-form-label">Cake Yum Factor</label>
                        <div className="col-sm-10">
                            <input type="number" className="form-control-plaintext" onChange={this.handleYumFactorChange} placeholder="Please insert cake yum factor(Number)" />
                            {this.state.yumFactor > 5 ? 'Enter a number less than 5' : ''}
                        </div>
                    </div>
                    <div className="row">
                        <span htmlFor="submit-form" className="col-sm-2 col-form-span"></span>
                        <div className="col-sm-10">
                            <div className="row">
                                <div className="col-sm-6">
                                    <button className="btn btn-primary">Save</button>
                                </div>
                            </div>
                        </div>
                    </div>
            </form>
      </div>
    )
  }
}
export default AddCake;
