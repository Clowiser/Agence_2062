import logo from "../style/assets/logo/lgokey.png"
import React from 'react';
import * as boostrap from 'bootstrap';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./Home";
import HousingList from "./HousingList";

function Header() {
    return (

        <Router>
            <div>
                <React.Fragment>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light m-4 rounded shadow">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/"> <img src={logo} alt='logo'/></a>
                            <button className="navbar-toggler" type="button"
                                    data-bs-toggle="collapse" data-bs-target="#navbarNav"
                                    aria-controls="navbarNav" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav ms-auto">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="/">Accueil</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="/liste">Liste Habitats</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/liste" element={<HousingList />} />
                    </Routes>

                </React.Fragment>
            </div>
        </Router>
    );
}

export default Header;
