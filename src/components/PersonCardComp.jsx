import React, {Component} from "react";

//////////////////////////////////////////////
// PersonCardComp.jsx

class PersonCardComp extends Component {
    render() {
        // Props passed from parent component
        const {firstName, lastName, age, hairColor} = this.props;

        return <div>
            <h1>{ lastName }, { firstName }</h1>
            <p>Age: { age }</p>
            <p>Hair Color: { hairColor }</p>
            <br></br>
        </div>;
    }
}

export default PersonCardComp;