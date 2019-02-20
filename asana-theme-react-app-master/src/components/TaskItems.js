import React from 'react';
import FlipMove from 'react-flip-move';

import '../style/TaskList.css';

export default class TaskItems extends React.Component {

    constructor(props) {
        super(props);
        this.createTasks = this.createTasks.bind(this);
    }

    // creates the task into the category list
    createTasks(task) {
        return <li key= { task.key }>
                    <div className="taskContainer">
                        <button onClick= { () => this.moveLeft(task.key) } key= { task.key } > Left </button>
                        <button id="bt-remove" onClick= { () => this.delete(task.key) } key= { task.key } > remove </button>
                        <button onClick= { () => this.moveRight(task.key) } key= { task.key } > Right </button>
                    </div>
                    <div className="taskParagraph">
                        <p>{task.text}</p>
                    </div>
                </li>
    }

    // deletes the task from the list, and the array of tasks
    delete(key) {
        this.props.delete(key);
    }

    // moves the task by changing the status
    moveLeft(key) {
        this.props.moveLeft(key);
    }

    // moves the task by changing the status
    moveRight(key) {
        this.props.moveRight(key);
    }

    render() {
        
        var taskEntries = this.props.entries;
        var listTasks = taskEntries.map(this.createTasks);

        return (
            <ul className= "taskList">
            <FlipMove duration= { 350 } easing="ease-out">
                { listTasks }
            </FlipMove>
            </ul>
        );
    }
}