import React from 'react';
import FlipMove from 'react-flip-move';
import Item from "./Item";
import { addTaskToList, filteredTasks, deleteTask } from '../services/ListStateProvider';

import "../style/TaskList.css";

export default class TaskList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            entry: '',
            entries: filteredTasks(this.props.name),
            name: this.props.name,
            status: this.props.name,
            filteredList: [],
        };

        this.filteredTasks = this.filteredTasks.bind(this)
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.test = ["Backlog", "To Do", "In Progress", "Completed"];
        // this.moveLeft = this.moveLeft.bind(this);
        // this.moveRight = this.moveRight.bind(this);
        // this.updateLists = this.updateLists.bind(this);
    }

    // function for adding items to the list
    addTask = (event) => {
        event.preventDefault();
        const newEntry = this.state.entry;
        const obj = {"key": newEntry + Math.floor(Math.random() * 10000), 'text': newEntry, 'status': this.state.name }
        console.log(obj)
        this.setState(prevState => ({
            entry: '',
            entries: [...prevState.entries, obj]
          })
        );
        filteredTasks()
    }

    onChange = (event) => {
        this.setState({ entry: event.target.value });
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

            <div className="taskListMain">
                <div className="header">
                    <h4>{this.props.name}</h4>
                    <h4>{this.props.entry}</h4>
                    <form className="App" onSubmit={this.addTask}>
                        <input value={this.state.entry} onChange={this.onChange} />
                        <button>Submit</button>
                    </form>
                    <button onClick={this.filteredTasks}>click</button>
                </div>
                <FlipMove duration={350} easing="ease-out">
                    {this.state.filteredList.map(item => (
                        <Item
                            name={this.props.name}
                            delete={this.deleteTask}
                        />
                    ))}
                </FlipMove>
            </div>
        );
    }
}