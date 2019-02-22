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

            ],
            tasklist: [
                {
                    key: 4314,
                    text: 'Do CS371 Homework',
                    status: 'backlog'
                },
                {
                    key: 1524,
                    text: 'Go to classes',
                    status: 'inProgress'
                },
                {
                    key: 1624,
                    text: 'Rock Climb / exercise',
                    status: 'toDo'
                },
                {
                    key: 41324,
                    text: 'Clean apartment for cleaning checks.',
                    status: 'toDo'
                },
                {
                    key: 15024,
                    text: 'Write a paper',
                    status: 'completed'
                },
                {
                    key: 1324,
                    text: 'Finish SystemTech Coding challenge',
                    status: 'completed'
                }
            ]
        };
        this.addTask = this.addTask.bind(this);
        this.filterTasks = this.filterTasks.bind(this);
        this.getData = this.getData.bind(this);

    };

    // take input and name from child element to create new task

    addTask(textInputValue, currentStatusValue) {
        const obj = { "key": textInputValue + Math.floor(Math.random() * 10000), 'text': textInputValue, 'status': currentStatusValue }
        
        this.setState(prevState => ({
            newEntry: obj,
            tasklist: [...prevState.tasklist, obj]
        })
        );
        console.log(this.state)
        this.filterTasks()
    }

    getData(val){
        // do not forget to bind getData in constructor
        this.setState({
            backlog: update(this.state.backlog, {1: {status: {$set: 'toDo'}}})
          })
    }

    filterTasks() {
        var _ = require('lodash')
        const filtered = _.groupBy(this.state.tasklist, "status")
        console.log(filtered)
        this.setState(prevState => ({
            ...prevState,
            backlog: filtered.backlog,
            inProgress: filtered.inProgress,
            toDo: filtered.toDo,
            completed: filtered.completed
        })
        );
        console.log(this.state)
    }

    render() {
        return (
            <div className="main-content">
                <h1>{this.state.columnList}</h1>
                <Lists handlerFromParent={this.addTask}
                    name="backlog"
                    tasklist={this.state.backlog} 
                    getData={this.getData}/>
                <Lists handlerFromParent={this.addTask}
                    name="toDo"
                    tasklist={this.state.toDo} 
                    getData={this.getData}/>
                <Lists handlerFromParent={this.addTask}
                    name="inProgress"
                    tasklist={this.state.inProgress} 
                    getData={this.getData}/>
                <Lists handlerFromParent={this.addTask}
                    name="completed"
                    tasklist={this.state.completed} 
                    getData={this.getData}/>
            </div>
        );
    }
}