import logo from "../style/assets/logo/lgokey.png"
import React from 'react';
import * as boostrap from 'bootstrap';

function Header() {
    return (
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
                                    <a className="nav-link" href="/">Liste Habitats</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </React.Fragment>


        </div>
    );
}

export default Header;
