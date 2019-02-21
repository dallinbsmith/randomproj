import React from 'react';
import { getOptions } from '../../services/filter';
import Info from './Info';
import Header from './Header';
import Footer from './Footer';
import FilteredList from './FilteredList';
import { applyFilter, search } from '../../services/filter';
import { Card, CardTitle, CardDeck, CardSubtitle, CardBody } from 'reactstrap';

export default function Lists(props) {
    const options = getOptions();
    const { filter } = props;
    const getClass = (key) => (key === filter ? 'selected' : '');

    return (
        <div>
            <CardDeck>
                {Object.keys(options).map(key => (
                    <Card key={key}>
                        <CardTitle>
                            {options[key]}
                        </CardTitle>
                    </Card>
                ))}
                {/* <ul className="filters list-unstyled clearfix">
                    {Object.keys(options).map(key => (
                        <li key={key}>
                            <a onClick={() => changeFilter(key)} className={getClass(key)}>
                                {options[key]}
                            </a>
                        </li>
                    ))}
                </ul>
                <Card>
                    <CardBody>
                        <CardTitle>
                            <Header {...{ addNew, mode, query, setSearchQuery }} />
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
                            <Header {...{ addNew, mode, query, setSearchQuery }} />
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
                            <Header {...{ addNew, mode, query, setSearchQuery }} />
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
                            <Header {...{ addNew, mode, query, setSearchQuery }} />
                        </CardTitle>
                        <CardSubtitle>
                            <FilteredList {...{ items, changeStatus }} />
                        </CardSubtitle>
                        <Footer {...{ count, filter, changeFilter, mode, changeMode }} />
                    </CardBody>
                </Card> */}
            </CardDeck>
        </div>
    );
}