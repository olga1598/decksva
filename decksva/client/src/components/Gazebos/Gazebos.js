import React from 'react';
import { NavLink } from "react-router-dom";
import "./Gazebos.css";


function Gazebos() {
    return (
        <div className="gazebos-inside">
            <div className="gazebos-content-first">
                <div className="gazebos-main-top"></div>
                <div className="gazebos-main-center">
                    <h1>GAZEBOS AND</h1>
                    <h1>PAVILIONS</h1>
                    <NavLink to={`/contacts`}>
                        <button className="estimate-button" type="button">Request A Free Estimate</button>
                    </NavLink>
                </div>
                <div className="gazebos-main-bottom"></div>
            </div>
            <div className="gazebos-content-second">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <h4><strong>GAZEBOS AND PAVILIONS ENCHANCE THE BEAUTY OF YOUR OUTDOOR LIVING SPACE.</strong></h4>
                        <p>Create a beautiful, shaded space in your backyard that you can enjoy even on the sunniest days. With many choices in materials and design, Gazebos and Pavilions will increase your outdoor entertaining space, while adding a design element to your backyard. Both structures can be designed with screens to keep both sun and bugs out, so you can truly enjoy your outdoor space.</p>
                        <p>VA Deck Builders will design and install Gazebos and Pavilions are best suited for your outdoor environment and you lifestyle. </p>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
                <NavLink to="/contacts">
                    <button className="btn btn-primary" type="button">CONTACT US FOR A FREE ESTIMATE</button>
                </NavLink>
            </div>
            <div className="gazebos-content-third">
                <div className="spacer"></div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <h1><strong>GAZEBOS vs. PAVILIONS</strong></h1>
                        <br />
                                <p>Gazebos are outdoor shade structures with a solid roof and partially open sides, that are usually octagonal or oval in shape. They can have a built-in floor or can be placed on a concrete base.</p>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4">
                        <img src="./gazebos1.jpg" alt="sample-gazebo1" />
                    </div>
                    <div className="col-sm-4">
                        <img src="./gazebos2.jpg" alt="sample-gazebo1" />
                    </div>
                    <div className="col-sm-2"></div>
                </div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">        
                        <br />               
                        <p>Unlike a gazebo, a pavilion is a roofed structure with completely open sides and no built-in floor. The roof is typically supported by 4-6 posts or more, depending on the size, and they are most commonly attached to a deck, paver patio, or concrete base. Additionally, while a gazebo is more of a self-contained structure, pavilions are commonly used to provide a roof for a patio or seating area below.</p>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4">
                        <img src="./pavilion1.jpg" alt="sample-pavilion" />
                    </div>
                    <div className="col-sm-4">
                        <img src="./pavilion2.jpeg" alt="sample-pavilion" />
                    </div>
                    <div className="col-sm-2"></div>
                </div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">        
                        <br />               
                        <p>As far as materials go, Gazebos and Pavilions are available in Wood and Vinyl. Wood Gazebos and Pavilions are constructed from made from #1 Premium grade pressure treated lumber. Wood can be painted or stained and refinished and provides a warm atmosphere for an at home feel. Vinyl Gazebos & Pavilions offer the convenience of low maintenance while still retaining a traditional look.  The clean lines and brilliant finish of vinyl structures offer an attractive, modern alternative to wood.</p>
                        <br />
                        <h5><strong>OUR TEAM IS AVAILABLE TO HELP YOU DECIDE ON THE STRUCTURE THAT WOULD BEST SUIT YOUR OUTDOOR OASIS. GIVE US A CALL TO GET STARTED!</strong></h5>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
                <NavLink to="/contacts">
                    <button className="btn btn-primary" type="button">CONTACT US FOR A FREE ESTIMATE</button>
                </NavLink>
            </div>
            <div className="gazebos-content-forth">
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-2"><img src="./images/gaz-pav1.jpg" alt="gazibo & pavilion sample" className="gaz-pav-sample" /></div>
                    <div className="col-sm-2"><img src="./images/gaz-pav2.jpg" alt="gazibo & pavilion sample" className="gaz-pav-sample" /></div>
                    <div className="col-sm-2"><img src="./images/gaz-pav3.jpg" alt="gazibo & pavilion sample" className="gaz-pav-sample" /></div>
                    <div className="col-sm-2"><img src="./images/gaz-pav4.jpg" alt="gazibo & pavilion sample" className="gaz-pav-sample" /></div>
                    <div className="col-sm-2"><img src="./images/gaz-pav5.jpg" alt="gazibo & pavilion sample" className="gaz-pav-sample" /></div>
                    <div className="col-sm-1"></div>
                </div>
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-2"><img src="./images/gaz-pav6.jpg" alt="gazibo & pavilion sample" className="gaz-pav-sample" /></div>
                    <div className="col-sm-2"><img src="./images/gaz-pav7.jpg" alt="gazibo & pavilion sample" className="gaz-pav-sample" /></div>
                    <div className="col-sm-2"><img src="./images/gaz-pav8.jpg" alt="gazibo & pavilion sample" className="gaz-pav-sample" /></div>
                    <div className="col-sm-2"><img src="./images/gaz-pav9.jpg" alt="gazibo & pavilion sample" className="gaz-pav-sample" /></div>
                    <div className="col-sm-2"><img src="./images/gaz-pav10.png" alt="gazibo & pavilion sample" className="gaz-pav-sample" /></div>
                    <div className="col-sm-1"></div>
                </div>
            </div>
        </div>
    )
}

export default Gazebos
