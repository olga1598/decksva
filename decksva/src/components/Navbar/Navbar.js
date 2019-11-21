import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css";


class Navbar extends Component {
    state = {
        collapsed: true,
    };

    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    hideNavbar = () => {
        this.setState({
            collapsed: true,
        });
    }

    render () {
        const collapsed = this.state.collapsed;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <nav className="navbar navbar-expand-sm navbar-dark">
                <button className={`${classTwo}`} onClick={this.toggleNavbar} type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${classOne}`} id="navbarToggler">
                    <ul className="navbar-nav mr-auto" onClick={this.hideNavbar}>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" exact>HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">ABOUT</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to="/about" className="nav-link dropdown-toggle"id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                ABOUTus
                            </NavLink>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="#">COMPANY</a>
                                <a class="dropdown-item" href="#">PROCESS</a>
                                <a class="dropdown-item" href="#">REVIEWS</a>
                                <a class="dropdown-item" href="#">WHY CHOOSE US</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/resurfacing" className="nav-link">RESURFACING</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/gazebos" className="nav-link">GAZEBOS & PAVILIONS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contacts" className="nav-link">CONTACTS</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar
