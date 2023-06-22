import React, {Component} from "react";

//////////////////////////////////////////////
// PersonCardComp.jsx

class PersonCardComp extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstName: this.props.firstName,
            lastName: this.props.lastName,
            age: this.props.age,
            hairColor: this.props.hairColor
        }
    }

    render() {
        // Props passed from parent component
        //const {firstName, lastName, age, hairColor} = this.props;

        return <div>
            <h1>{ this.state.lastName }, { this.state.firstName }</h1>
            <p>Age: { this.state.age }</p>
            <p>Hair Color: { this.state.hairColor }</p>
            <br />
            <button>Birthday Button for { this.state.firstName } { this.state.lastName }</button>
            <br></br>
        </div>;
    }
}

export default PersonCardComp;