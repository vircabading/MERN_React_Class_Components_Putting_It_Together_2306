import React, {Component} from "react";

class Message extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: "Welcome to My World"
        }
    }

    logout = (e) => {
        this.setState({message: "Goodbye Boss"});
    }

    render() {
        return (
            <div>
                <h1>{ this.state.message }</h1>
                <button onClick={ this.logout } >Leave</button>
            </div>
        );

    }
}

export default Message;