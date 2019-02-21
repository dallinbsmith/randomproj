import React from 'react';
import Info from './Info';
import Lists from './Lists'
import Header from './Header';
import Footer from './Footer';
import FilteredList from './FilteredList';
import { applyFilter, search } from '../../services/filter';
import {Card, CardTitle, CardDeck, CardSubtitle, CardBody
} from 'reactstrap';


export default function TodoList(props) {
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
            <Lists/>
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
