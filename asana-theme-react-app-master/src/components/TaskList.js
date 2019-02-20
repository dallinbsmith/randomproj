import React from 'react';
import TaskItems from './TaskItems';
import { addTaskToList, filteredTasks, moveTaskLeft, moveTaskRight, deleteTask } from '../services/ListStateProvider';

import "../style/TaskList.css";

export default class TaskList extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            tasks: filteredTasks(this.props.name),
            name: this.props.name
        };

        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.moveLeft = this.moveLeft.bind(this);
        this.moveRight = this.moveRight.bind(this);
        this.updateLists = this.updateLists.bind(this);
    }

    // function for adding items to the list
    addTask(e) {

        if (this._inputElement.value !== "") {
            addTaskToList(this._inputElement.value, this.props.name);
        }
        
        this.updateLists();
        this._inputElement.value = "";
        e.preventDefault();
    }

    // function to delete a task from the task manager
    deleteTask(key) {

        this.state.tasks.filter(function (task) {
            if (task.key === key) {
                deleteTask(task.key);
                // console.log(task.key);
            }
            return (task.key === key);
        });

        this.updateLists();
    }

    // function to move the button left from the current list, it changes the status of 
    // the task and updates the current components array
    moveLeft(key) {

        var columnName = this.props.name;
        this.state.tasks.filter(function (task) {
            if (task.key === key) {
                moveTaskLeft(columnName, task.key);
                // console.log(task.key);
            }
            return (task.key === key);
        });

        this.updateLists();
    }

    // function to move the button right from the current list, it changes the status of 
    // the task and updates the current components array
    moveRight(key) {

        var columnName = this.props.name;

        this.state.tasks.filter(function (task) {
            if (task.key === key) {
                moveTaskRight(columnName, task.key);
                // console.log(task.key);
            }
            return (task.key === key);
        });

        this.updateLists();
    }

    updateLists() {
        
        this.setState({
            tasks: filteredTasks(this.props.name)
        });
    }

    render() {

        return (

            <div className= "taskListMain">
                <div className= "header">
                    <h4>{this.props.name}</h4>
                    <form onSubmit={this.addTask}>
                        <input ref={(a) => this._inputElement = a} 
                                placeholder= "enter task"></input>
                        <button type="submit">add</button>
                    </form>
                </div>
                <TaskItems entries= { this.state.tasks } 
                            delete= { this.deleteTask } 
                            moveLeft= { this.moveLeft } 
                            moveRight= {this.moveRight }/>            
            </div>
        );
    }
}