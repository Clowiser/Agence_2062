import React, { Fragment } from "react"
import {Route, Router} from "react-router";

const RouterTest = () => {
    return (
        <Router>
            <main>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <Route path="/" render={() => <h1>Welcome!</h1>} />
            </main>
        </Router>
    )
};

export default RouterTest;