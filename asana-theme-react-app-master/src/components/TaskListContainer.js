import React, { Component } from 'react';
import TaskList from './TaskList';
import { filteredTasks, getList } from '../services/ListStateProvider';

export default class TaskListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnID: "",
            columnList: []
        }

        this.filteredList = this.filteredList.bind(this);
    }

    filteredList() {
        var columnName = this.name;
        var filteredList = filteredTasks(columnName);

        this.setState({ columnList: filteredList});
    }

    render () {
        return (
            <div className= "main-content">
                <TaskList name ="Backlog"/>
                <TaskList name ="To Do"/>
                <TaskList name ="In Progress"/>
                <TaskList name ="Completed"/>
            </div>
        );
    }
}