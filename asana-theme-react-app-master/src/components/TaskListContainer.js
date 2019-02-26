import React, { Component } from 'react';
import Lists from './Lists';
import update from 'react-addons-update';

export default class TaskListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newEntry: '',
            backlog: [{
                key: 4314,
                text: 'Do CS371 Homework',
                status: 'backlog'
            }
            ],
            inProgress: [{
                key: 1524,
                text: 'Go to classes',
                status: 'inProgress'
            },],
            toDo: [{
                key: 1624,
                text: 'Rock Climb / exercise',
                status: 'toDo'
            },
            {
                key: 41324,
                text: 'Clean apartment for cleaning checks.',
                status: 'toDo'
            },
            ],
            completed: [{
                key: 15024,
                text: 'Write a paper',
                status: 'completed'
            }, {
                key: 1324,
                text: 'Finish SystemTech Coding challenge',
                status: 'completed'
            }
            ]
        };
        this.addTask = this.addTask.bind(this);
        this.shiftTaskIndex = this.shiftTaskIndex.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    };

    // take input and name from child element to create new task and key based on which input column submitted

    addTask(textInputValue, currentStatusValue) {
        const obj = { "key": textInputValue + Math.floor(Math.random() * 10000), 'text': textInputValue, 'status': currentStatusValue }
        this.setState(prevState => ({
            [currentStatusValue]: [...prevState[currentStatusValue], obj]
        })
        );
        console.log(this.state)
    }

    shiftTaskIndex(col, todo, oldCol, oldKey) {
        this.setState(prevState => ({ 
            ...prevState,
            [col]: [...this.state[col], todo] }))
        // this.deleteTask(oldCol, oldKey)
        console.log(this.state)
        // console.log(col, todo, oldCol, oldKey)
    }

    deleteTask(col, key){
        const filtered = this.state[col].filter(task => task.key !== key)
        this.setState({ [col]: filtered })
    }

    render() {
        return (
            <div className="main-content">
                <h1>{this.state.columnList}</h1>
                <Lists addTask={this.addTask}
                    name="backlog"
                    tasklist={this.state.backlog}
                    shiftTaskIndex={this.shiftTaskIndex}
                    deleteTask={this.deleteTask} />
                <Lists addTask={this.addTask}
                    name="toDo"
                    tasklist={this.state.toDo}
                    shiftTaskIndex={this.shiftTaskIndex} 
                    deleteTask={this.deleteTask}/>
                <Lists addTask={this.addTask}
                    name="inProgress"
                    tasklist={this.state.inProgress}
                    shiftTaskIndex={this.shiftTaskIndex} 
                    deleteTask={this.deleteTask}/>
                <Lists addTask={this.addTask}
                    name="completed"
                    tasklist={this.state.completed}
                    shiftTaskIndex={this.shiftTaskIndex} 
                    deleteTask={this.deleteTask}/>
            </div>
        );
    }
}