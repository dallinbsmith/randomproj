import React from 'react';
import Info from './Info';
import Header from './Header';
import Footer from './Footer';
import FilteredList from './FilteredList';
import { getOptions, applyFilter, search } from '../../services/filter';
import {
    Card, CardTitle, CardDeck, CardSubtitle, CardBody
} from 'reactstrap';


export default function TodoList(props) {
    const options = getOptions();
    const { list, filter, mode, query } = props.data;
    const { addNew, changeFilter, changeStatus, changeMode } = props.actions;
    const count = list.length;
    const items = search(applyFilter(list, filter), query);

    return (
        // <div className="container">
        //     <div className="row">
        //         <div className="todolist">
        //             <Header {...{ addNew, mode, query, setSearchQuery }} />
        //             <FilteredList {...{ items, changeStatus }} />
        //             <Footer {...{ count, filter, changeFilter, mode, changeMode }} />
        //             <Info {...{ mode }} />
        //         </div>
        <div>
            <h1>
                <Header {...{ addNew, mode, query }}/>
            </h1>
            <CardDeck>
                {Object.keys(options).map(key => (
                    <Card key={key}>
                        <CardTitle>
                            {options[key]}
                        </CardTitle>
                    </Card>
                ))}
            </CardDeck>
            <hr/>
            <hr/>
            <CardDeck>
                <Card>
                    <CardBody>
                        <CardTitle>
                            <Header {...{ addNew, mode, query }} />
                        </CardTitle>
                        <CardSubtitle>
                            <FilteredList {...{ items, changeStatus }} />
                        </CardSubtitle>
                        <Footer {...{ count, filter, changeFilter, mode, changeMode }} />
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle>
                            <Header {...{ addNew, mode, query }} />
                        </CardTitle>
                        <CardSubtitle>
                            <FilteredList {...{ items, changeStatus }} />
                        </CardSubtitle>
                        <Footer {...{ count, filter, changeFilter, mode, changeMode }} />
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle>
                            <Header {...{ addNew, mode, query }} />
                        </CardTitle>
                        <CardSubtitle>
                            <FilteredList {...{ items, changeStatus }} />
                        </CardSubtitle>
                        <Footer {...{ count, filter, changeFilter, mode, changeMode }} />
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle>
                            <Header {...{ addNew, mode, query }} />
                        </CardTitle>
                        <CardSubtitle>
                            <FilteredList {...{ items, changeStatus }} />
                        </CardSubtitle>
                        <Footer {...{ count, filter, changeFilter, mode, changeMode }} />
                    </CardBody>
                </Card>
            </CardDeck>

        </div>
    );
}
