import React from 'react';
import { NavLink } from "react-router-dom";
import "./Roofs.css";

const Roofs = () => {
    return (
        <div className="roofs-inside">
            <div className="roofs-content-first">
                <div className="roofs-main-top"></div>
                <div className="roofs-main-center">
                    <h1>LOUVERED</h1>
                    <h1>ROOFS</h1>
                    <NavLink to={`/contacts`}>
                        <button className="estimate-button" type="button">Request A Free Estimate</button>
                    </NavLink>
                </div>
                <div className="roofs-main-bottom"></div>
            </div>
            <div className="roofs-content-second">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <h4><strong>WE BRING THE BEST IN LOUVERED ROOFING SYSTEMS TO OUR CLIENTS.</strong></h4>
                        <p>Simply put, louvered roofs are the world’s smartest pergolas. Their unique pivot design gives a full 160° range of motion that lets you block out sun and rain when needed. This is a perfect system for clients who want to create shaded outdoor space without compromising on the sunlight entering their house. A state of the art louvered roofing system will take your backyard space to a new level of comfort.</p>
                        <p><strong>Our louvered roofs are strong, modern and can be customized to accommodate the look and feel of your existing backyard structures.</strong></p>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
                <NavLink to="/contacts">
                    <button className="btn btn-primary" type="button">CONTACT US FOR A FREE ESTIMATE</button>
                </NavLink>
            </div>
            <div className="roofs-content-third">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <h5><strong>LOUVERED ROOF IN ACTION</strong></h5>
                        <div className="resp-container-iframe">
                            <iframe src="https://www.youtube.com/embed/yfz5TrAAZ1Q?wmode=opaque&amp;enablejsapi=1"></iframe>
                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
                <div className="row" id="how-louvered-roof-system-works">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <h5><strong>This is how a Motorized Adjustable Sundance Louvered Roof System works:</strong></h5>
                            <ul>
                                <li>The heavy duty extruded powder-coated aluminum Louvers fit between extruded aluminum 2x8 beams and are supported by extruded aluminum 6x6 posts.</li>
                                <li>The Louvers are attached to ball bearing rollers that rotate the Louvers by use of a Remote Controlled Motor.</li>
                                <li>The Louvers open and close with the push of a button. When the Louvers are closed they route water into the extruded gutters that are attached to the beams and down the inside of the 6x6 support posts. When the Louvers are open they allow through any amount of sunlight or shade that you desire.</li>
                            </ul>            
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
            <div className="roofs-content-forth">
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-2">
                        <img src="./images/roof1.jpg" alt="louvered-roof-sample" />
                    </div>
                    <div className="col-sm-2">
                        <img src="./images/roof2.jpg" alt="louvered-roof-sample" />
                    </div>
                    <div className="col-sm-2">
                        <img src="./images/roof3.jpg" alt="louvered-roof-sample" />
                    </div>
                    <div className="col-sm-2">
                        <img src="./images/roof4.jpg" alt="louvered-roof-sample" />
                    </div>
                    <div className="col-sm-2">
                        <img src="./images/roof5.jpg" alt="louvered-roof-sample" />
                    </div>
                    <div className="col-sm-1"></div>
                </div>
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-2">
                        <img src="./images/roof6.jpg" alt="louvered-roof-sample" />
                    </div>
                    <div className="col-sm-2">
                        <img src="./images/roof7.jpg" alt="louvered-roof-sample" />
                    </div>
                    <div className="col-sm-2">
                        <img src="./images/roof8.jpg" alt="louvered-roof-sample" />
                    </div>
                    <div className="col-sm-2">
                        <img src="./images/roof9.jpg" alt="louvered-roof-sample" />
                    </div>
                    <div className="col-sm-2">
                        <img src="./images/roof11.jpg" alt="louvered-roof-sample" />
                    </div>
                    <div className="col-sm-1"></div>
                </div>
                <NavLink to="/contacts">
                    <button className="btn btn-primary" type="button">CONTACT US FOR A FREE ESTIMATE</button>
                </NavLink>
            </div>
        </div>
    )
}

export default Roofs


// <h5><strong>LOUVERED ROOF IN ACTION</strong></h5>
// <iframe src="https://www.youtube.com/embed/yfz5TrAAZ1Q?wmode=opaque&amp;enablejsapi=1"></iframe>
