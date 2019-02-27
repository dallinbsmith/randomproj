import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import Task from "./Task";

class Test extends Component {
    constructor(props) {
        super(props);
        this.inputChange = this.inputChange.bind(this);
        this.submitToList = this.submitToList.bind(this);
        this.state = {
            inputField: '',
            tasklist: this.props.tasklist,
        };
    }

        // pass the input field value to the event handler passed
        // as a prop by the parent (TaskListContainer)
    submitToList(evt) {
        evt.preventDefault();
        this.props.addTask(this.state.inputField, this.props.name);
        this.setState({
            inputField: '',
        });
    }

    inputChange(event) {
        this.setState({
            inputField: event.target.value
        });
    }


    render() {
        return (
            <div>
                <div className="taskListMain">
                    <div className="header">
                        <h4>{this.props.title}</h4>
                        <form onSubmit={this.submitToList} className="App">
                            <input type="text"
                                id="theInput"
                                value={this.state.inputField}
                                onChange={this.inputChange} />
                            <input type="submit" />
                        </form>
                    </div>
                    <FlipMove duration={350} easing="ease-out">
                        {this.props.tasklist.map(task => (
                            <Task
                                tasklist = {this.props.tasklist}
                                task = {task}
                                key={task.key}
                                shiftTaskIndex={this.props.shiftTaskIndex}
                                deleteTask= {this.props.deleteTask}
                            />
                        ))}
                    </FlipMove>
                </div>
            </div>
        );
    }
}

export default Test;