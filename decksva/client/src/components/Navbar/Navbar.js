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
            <div className="header-navbar">
            <div className="header-content">
                <div className="row">
                    <div className="col-sm-6">
            
                        <div className="header-top-left">
                            <NavLink to="/">
                                    <img src="/logo1.jpg" alt="logo" className="logo" />
                            </NavLink>   
                        </div>
                    </div>
                    
                    <div className="col-sm-6">
                    <div className="header-top-right">
                                <span className="header-phone">
                                <a className="header-phone-number" href="tel:2022022222">
                                    <i className="fas fa-phone"> 202-202-2222</i>
                                </a>
                                </span>
                                <span className="social-links">
                                <a className="social-links facebook" href="https://www.facebook.com/virginiadeckbuilders/" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a className="social-links houzz" href="https://www.houzz.com/professionals/decks-patios-and-outdoor-enclosures/virginia-deck-builders-pfvwus-pf~1706389953" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-houzz"></i>
                                </a>
                                <a className="social-links yelp" href="https://www.yelp.com/biz/virginia-deck-builders-alexandria-7?osq=virginia+deck+builders" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-yelp"></i>
                                </a>
                                </span>
                        </div>
                    </div>
                </div>
            
            </div>
    
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                <button className={`${classTwo}`} onClick={this.toggleNavbar} type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${classOne}`} id="navbarToggler">
                    <ul className="navbar-nav mr-auto" onClick={this.hideNavbar}>
                        <li className="nav-item">
                            <NavLink to="/" className="nav-link" exact>HOME</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink to="/about" className="nav-link dropdown-toggle"id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                ABOUT
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink to="/company" className="dropdown-item">COMPANY</NavLink>
                                <NavLink to="/process" className="dropdown-item">PROCESS</NavLink>
                                <NavLink to="/reviews" className="dropdown-item">REVIEWS</NavLink>
                                <NavLink to="/why-choose-us" className="dropdown-item">WHY CHOOSE US</NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/newdesk" className="nav-link">NEW DECKS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/resurfacing" className="nav-link">RESURFACING</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/gazebos" className="nav-link">GAZEBOS & PAVILIONS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/louvered-roofs" className="nav-link">LOUVERED ROOFS</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contacts" className="nav-link">CONTACTS</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            </div>
        )
    }
}

export default Navbar
