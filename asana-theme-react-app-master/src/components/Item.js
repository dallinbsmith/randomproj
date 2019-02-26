import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.lessComplete = this.lessComplete.bind(this)
        this.moreComplete = this.moreComplete.bind(this)
        this.delete = this.delete.bind(this)

    }

    lessComplete(){
        const statusArr = ["backlog", "toDo", "inProgress", "completed"];
        const statIndex = statusArr.indexOf(this.props.task.status)
        const leftShifted = statusArr[statIndex - 1]
        this.props.task['status'] = leftShifted
        this.props.task['key'] = this.props.task.key + 1
        // this.props.deleteTask(this.props.task.status, this.props.task.key)
        this.props.shiftTaskIndex(leftShifted, this.props.task);
      }

    moreComplete(){
        const oldKey = this.props.task.key
        const oldStatus = this.props.task.status
        const statusArr = ["backlog", "toDo", "inProgress", "completed"];
        const statIndex = statusArr.indexOf(this.props.task.status)
        const rightShifted = statusArr[statIndex + 1]
        this.props.task['status'] = rightShifted
        this.props.task['key'] = this.props.task.key + 1
        this.props.shiftTaskIndex(rightShifted, this.props.task, oldStatus, oldKey);
    }
     
    delete(){
        this.props.deleteTask(this.props.task.status, this.props.task.key)
    }

    render() {
        return (
            <div>                
                <h1>{this.props.task.text}</h1>
                <button onClick = {this.lessComplete}>Left</button>
                <button onClick = {this.delete}>Delete</button>
                <button onClick = {this.moreComplete}>Right</button>
            </div>
        );
    }
}

export default Item;