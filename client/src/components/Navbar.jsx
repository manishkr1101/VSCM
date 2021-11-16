import React, { Component } from 'react';

import './Navbar.scss'
import web3 from '../services/web3';

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                address: '0x'
            }
        };
    }
    async componentDidMount() {
        const account = await web3.getCurrentAccount();
        this.setState({
            user: {
                address: account
            }
        })
        
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd"}}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Vaccine Supply Chain Management</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        {/* <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class ="btn btn-outline-success" type ="submit">Search</button>
                        </form> */}
                        <div className="d-flex">
                            <span>{this.state.user.address}</span>
                        </div>
                    </div>
                </div>
            </nav>

        );
    }
}

export default Navbar;
