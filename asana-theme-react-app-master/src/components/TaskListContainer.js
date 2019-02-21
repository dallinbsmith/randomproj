import React, { Component } from 'react';
import TaskList from './TaskList';
import { filteredTasks } from '../services/ListStateProvider';

export default class TaskListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnID: "",
            entry: '',
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
        this.filteredTasks = this.filteredTasks.bind(this)
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    };

    addTask = (event) => {
        event.preventDefault();
        const newEntry = this.state.entry;
        const obj = { "key": newEntry + Math.floor(Math.random() * 10000), 'text': newEntry, 'status': this.state.name }
        console.log(obj)
        this.setState(prevState => ({
            entry: '',
            tasklist: [...prevState.entries, obj]
        })
        );
        filteredTasks()
    }

    onChange = (event) => {
        this.setState({ entry: event.target.value });
      }

    filteredTasks() {
        const filtered = this.state.entries.filter(element => {
            return element.status === this.props.name
        });
        this.setState({
            filteredList: filtered
        });
    }

    render() {
        return (
            <div className="main-content">
                <h1>{this.state.columnList}</h1>
                <TaskList name="Backlog"
                    addTask={this.addTask}
                    entries={this.state.tasklist} />
                <TaskList name="To Do"
                    addTask={this.addTask}
                    entries={this.state.tasklist} />
                <TaskList name="In Progress"
                    addTask={this.addTask}
                    entries={this.state.tasklist} />
                <TaskList name="Completed"
                    addTask={this.addTask}
                    entries={this.state.tasklist} />
            </div>
        );
    }
}