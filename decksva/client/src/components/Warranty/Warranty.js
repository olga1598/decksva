import React, { Component } from 'react';
import "./Warranty.css";
import { NavLink } from "react-router-dom";

class Warranty extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="warranty">
                <div className="warranty-content-first">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <h1 className="warranty-content-first-title"><strong>WARRANTY</strong></h1>
                            <br />
                            <p>Deck Guardian truly provides the best of all worlds. You receive both the dedicated service of a committed and responsive local owner/operator and the strength and assurances of an established national corporation.</p>
                            <p>Your deck, sunroom, porch, or other custom outdoor living space is backed by Deck Guardian’s written warranty for workmanship of 2 years when Deck Guardian’s exerts control as your remodeling contractor.</p>
                            <p>In addition, depending on the building materials you select, manufacturers’ warranties may apply to protect you against defects in materials. And Deck Guardian’s intensive training and, in many cases, certification as an official installer help reinforce your confidence that those manufacturers’ warranties won’t be adversely affected by installation issues.</p>
                            <p>And in case that isn’t enough, each Deck Guardian’s location maintains a minimum of $1 million in liability coverage and full workers compensation insurance (where required by law) to protect you from any possible mishaps.</p>
                            <p>Simply put, no other company in the remodeling industry provides this level of client assurance and protection. Meaning that when you elect to work with Deck Guardian Outdoor Creators, you can rest assured that you’ll enjoy quality construction levels and unmatched protections not available from any other builder.</p>
                            <p>1 “Workmanship” defects include splitting, severe warping or cupping of building materials, leaking roofs or shifting patio pavers.</p>
                            <p>2 “Structural” defects apply only to the structural fitness of components such as footings, paver patio base material, columns, beams, joists, rafters, stair stringers and railing posts and rails.</p>
                            <p>3 Please note that all manufactured items such as pressure treated lumber, composite and synthetic decking, roofing shingles, windows, pavers, HVAC equipment and all electrical components, and outdoor kitchen components are covered under the terms of the manufacturer’s warranty.</p>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                </div>
                <div className="warranty-content-second">
                    <div className="warranty-content-second-estimate-button">
                        <NavLink to={`/contacts`}>
                            <button className="btn btn-primary" type="button">GET YOUR FREE ESTIMATE TODAY</button>
                        </NavLink>
                    </div>
                </div>

            </div>
        )
    }
}

export default Warranty
