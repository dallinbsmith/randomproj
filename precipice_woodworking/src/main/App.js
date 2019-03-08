import React from "react";
import { Switch, Route } from "react-router-dom";
import StickyNavbar from './views/navbar/Navbar';

import Home from "./views/home/Home";
import Contact from "./views/Contact"

export default function App() {

    return (
        <div style={{ width: "100vw", overflowX: "hidden" }}>
            <StickyNavbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
        </div>
    )
}
