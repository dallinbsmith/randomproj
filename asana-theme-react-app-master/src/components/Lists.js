import React, { Component } from 'react';
import FlipMove from 'react-flip-move';
import Item from "./Item";

class Test extends Component {
    constructor(props) {
        super(props);
        this.inputChange = this.inputChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
            inputField: '',
            currentStatus: '',
        };
    }
    submitHandler(evt) {
        evt.preventDefault();
        // pass the input field value to the event handler passed
        // as a prop by the parent (TaskListContainer)
        this.props.handlerFromParent(this.state.inputField, this.props.name);

        this.setState({
            inputField: '',
            currentStatus: "toDo",
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
                        <h4>{this.props.name}</h4>
                        <form onSubmit={this.submitHandler} className="App">
                            <input type="text"
                                id="theInput"
                                value={this.state.inputField}
                                onChange={this.inputChange} />
                            <input type="submit" />
                        </form>
                    </div>
                    <FlipMove duration={350} easing="ease-out">
                        {this.props.tasklist.map(item => (
                            <Item
                                name= {this.props.name}
                                key={item.key}
                                text={item.text}
                                status={item.status}
                                getData={this.props.getData}
                            />
                        ))}
                    </FlipMove>
                </div>
            </div>
        );
    }
}

export default Test;