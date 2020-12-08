import React from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";

const App = () => {

    const Name = () => {
        return <h1>Hello, i am name page</h1>
    };

    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route path="/contact/name" component={Name} />
                <Route component={Error} />
            </Switch>
        </>
    );
};

export default App;