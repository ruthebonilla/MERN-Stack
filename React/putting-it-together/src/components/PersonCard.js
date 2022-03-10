import React, { Component } from 'react';

class PersonCard extends Component{
    constructor(props){
        super(props);
            this.state = {
                bdayCounter: this.props.number
            };
        }

    increaseCounter = () => {
        this.setState({
            bdayCounter:this.state.bdayCounter + 1
        })
    }

    render(){
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <h5>Age: {this.state.bdayCounter}</h5>
                <h5>Hair Color: {this.props.hairColor}</h5>
                <button onClick={this.increaseCounter} className="btn btn-info">Birthday Button for {this.props.firstName}</button>
                <br />
                <hr />
            </div>
        );
    }
}



export default PersonCard;