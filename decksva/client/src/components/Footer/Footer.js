import React from 'react';
import { NavLink } from "react-router-dom";
import "./Footer.css";


function Footer() {
    return (
        <div className="footer">
        <div className="footer-inner">
            <div className="row">
                <div className="col-sm-4">
                    <img className="footer-logo" src="./logo1.jpg" alt="company-logo" />
                </div>
                <div className="col-sm-4">
                    <div className="footer-address">
                        <p>
                            <strong>Address:</strong>
                            <br />
                            501 Holland Ln, Suite 402
                            <br />
                            Alexandria, VA 22314
                            <br />
                            <strong>Phone:</strong>
                            <a href="tel:7033446757"> (703) 344-6757</a>
                        </p>
                    </div>
                    <div className="footer-estimate-button">
                        <NavLink to={`/contacts`}>
                            <button className="btn btn-primary" type="button">GET YOUR FREE ESTIMATE TODAY</button>
                        </NavLink>
                    </div>
                    <div className="social-icons">
                        <a className="social-links facebook" href="https://www.facebook.com/virginiadeckbuilders/" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a className="social-links houzz" href="https://www.houzz.com/professionals/decks-patios-and-outdoor-enclosures/virginia-deck-builders-pfvwus-pf~1706389953" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-houzz"></i>
                        </a>
                        <a className="social-links yelp" href="https://www.yelp.com/biz/virginia-deck-builders-alexandria-7?osq=virginia+deck+builders" target="_blank" rel="noopener noreferrer">
                            <i className="fab fa-yelp"></i>
                        </a>
                    </div>
                </div>
                <div className="col-sm-4">
                    <p className="footer-navlinks">
                        <NavLink to="/resurfacing" className="nav-link-footer">New Deck Installation</NavLink>
                        <br />
                        <NavLink to="/resurfacing" className="nav-link-footer">Deck Resurfacing</NavLink>
                        <br />
                        <NavLink to="/gazebos" className="nav-link-footer">Gazebos & Pavilions</NavLink>
                    </p>
                    <p>
                        <strong>OUR SISTER COMPANY:</strong>
                        <br />
                        <a className="footer-sister-company-link" href="https://www.deckguardian.com/" alt="sister-company" target="_blank" rel="noopener noreferrer">Deck Guardian</a>
                    </p>
                    <p className="web-design-by">
                        Web Design by <a href="mailto:olga.repnitsyna@gmail.com">Olga Repnitsyna</a>
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Footer
