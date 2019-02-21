import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "To Do"            
        };
        this.test = ["Backlog", "To Do", "In Progress", "Completed"];
    }

    render() {
        return (
            <div>
                <h1>{this.state.status}</h1>
            </div>
        );
    }
}

export default Item;