import React from 'react';
import { NavLink } from "react-router-dom";
import "./NewDesk.css";

const NewDesk = () => {
    return (
        <div className="newdeck-inside">
            <div className="newdeck-content-first">
                <div className="newdeck-main-top"></div>
                <div className="newdeck-main-center">
                    <h1>NEW DECK</h1>
                    <h1>INSTALLATION</h1>
                    <NavLink to={`/contacts`}>
                        <button className="estimate-button" type="button">Request A Free Estimate</button>
                    </NavLink>
                </div>
                <div className="resurfacing-main-bottom"></div>
            </div>
            <div className="newdeck-content-second">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <p>A deck is more than just an add-on to your home – it’s a place to gather, to celebrate, to relax, and to enjoy the outdoors. Decks also enhance the beauty of your home and add to its overall value.</p>
                    <h4><strong>WE ARE THE LEADING DECK BUILDERS IN VA.</strong></h4>
                    <p>We are proud to serve most of Washington, with few exceptions, as the foremost Deck Building and Deck Resurfacing Company in WA. We bring experience, commitment and competitive pricing to the table from initial meeting until completion of our project. We love what we do and strive to bring our A-game to every project. You can rest assured that the Olympic Decks team will go above and beyond to bring your vision to life via excellent planning, budgeting and incomparable customer service.</p>
                </div>
                <div className="col-sm-2"></div>
            </div>
            <NavLink to="/contacts">
                <button className="btn btn-primary" type="button">GET A FREE ESTIMATE</button>
            </NavLink>
        </div>

        </div>
    )
}

export default NewDesk
