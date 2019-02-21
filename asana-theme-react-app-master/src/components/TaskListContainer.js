import React, { Component } from 'react';
import TaskList from './TaskList';
import { filteredTasks } from '../services/ListStateProvider';

export default class TaskListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnID: "",
            backlog: [],
            todo: [],
            inprogress: [],
            completed: [],
            tasklist: [
                {
                    key: 4314,
                    text: 'Do CS371 Homework',
                    status: 'Backlog'
                },
                {
                    key: 1524,
                    text: 'Go to classes',
                    status: 'In Progress'
                },
                {
                    key: 1624,
                    text: 'Rock Climb / exercise',
                    status: 'To Do'
                },
                {
                    key: 41324,
                    text: 'Clean apartment for cleaning checks.',
                    status: 'To Do'
                },
                {
                    key: 15024,
                    text: 'Write a paper',
                    status: 'Completed'
                },
                {
                    key: 1324,
                    text: 'Finish SystemTech Coding challenge',
                    status: 'Completed'
                }
            ]
        }
    };

    render() {
        return (
            <div className="main-content">
                <h1>{this.state.columnList}</h1>
                <TaskList name="Backlog"
                    entries={this.state.tasklist} />
                <TaskList name="To Do"
                    entries={this.state.tasklist} />
                <TaskList name="In Progress"
                    entries={this.state.tasklist} />
                <TaskList name="Completed"
                    entries={this.state.tasklist} />
            </div>
        );
    }
}