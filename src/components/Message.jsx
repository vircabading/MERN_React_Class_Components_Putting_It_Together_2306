import React, {Component} from "react";

class Message extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Message Here</h1>
                <button>Leave</button>
            </div>
        );

    }
}

export default Message;