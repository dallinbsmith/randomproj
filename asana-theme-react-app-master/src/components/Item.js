import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "toDo"            
        };
        this.lessComplete = this.lessComplete.bind(this)
        this.test = ["Backlog", "To Do", "In Progress", "Completed"];
    }

    lessComplete(){
        this.props.getData(this.state.status);
      }

    moreComplete(){

    }
     

    render() {
        return (
            <div>                
                <h1>{this.props.text}</h1>
                <button value={this.state.status} onClick={() => this.lessComplete(this.state.status)>Left</button>
                <button onClick = {this.moreComplete}>Right</button>
            </div>
        );
    }
}

export default Item;