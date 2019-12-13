import React from 'react';
import { NavLink } from "react-router-dom";
import "./WhyUs.css";

const WhyUs = () => {
    return (
        <div className="why-us">
            <div className="why-us-content-first">
                <div className="row">
                    <div className="col-sm-3">
                        <img src="./new-deck.jpg" alt="why-choose-us-1" className="why-us-image" />
                    </div>
                    <div className="col-sm-3">
                        <img src="./resurfacing.jpg" alt="why-choose-us-2" className="why-us-image" />
                    </div>
                    <div className="col-sm-3">
                        <img src="./picture1.jpg" alt="why-choose-us-3" className="why-us-image" />
                    </div>
                    <div className="col-sm-3">
                        <img src="./picture1.jpg" alt="why-choose-us-4" className="why-us-image" />
                    </div>
                </div>
            </div>
            <div className="why-us-content-second">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <h1><strong>WHY CHOOSE US</strong></h1>
                        <ul>
                            <li>
                                <h4><strong>OUR CLIENTS LOVE US</strong></h4>
                                <p>We consistently get top-ratings and reviews from our clients. We believe that our clients should get 100% of our commitment from Day 1until the completion of the project. Our crew of decking professionals are experienced, hardworking and respectful of your time and space. </p>
                                <br />
                            </li>
                            <li>
                                <h4><strong>WE DELIVER TOP-NOTCH PRODUCTS</strong></h4>
                                <p>Whether you hire us to install a new deck, resurface an old one, install a gazebo, pavilion or Louvered roofing system, we will help you understand the materials and products that will work best for your project and budget. We strive continuously to incorporate new trends in design and materials into your project. As a result the product that we deliver to you will be beautiful, functional and the toast of the town for years to come.</p>
                                <br />
                            </li>
                            <li>
                                <h4><strong>WE QUOTE TO THE PENNY</strong></h4>
                                <p>Which means no hidden fees or charges. The only thing we ever add to the final invoice is the actual cost of the permit from your township and engineer. The reason for this is the large variation in fees. Some municipalities charge $100, but some charge as much as $1,200.</p>
                                <p>We take tremendous pride in being counted amongst the top Deck Contractors in Washington. And we do this with pricing that is affordable and competitive. We listen to your needs, design decks with high-performance and low maintenance materials that fit into your budget and, thus, are able to deliver an exceptional final product to you at the best price out there.</p>
                                <br />
                            </li>
                            <li>
                                <h4><strong>YOU CAN TRUST US</strong></h4>
                                <p>Virginia Deck Builders is a registered and insured Deck Builder in VA with 25 year warranty on products. So you can rest easy that when you put one of your biggest home investments in our hands.</p>
                                <br />
                            </li>
                            <li>
                                <h4><strong>WE ARE INDUSTRY LEADERS in NORTHERN VIRGINIA AREA</strong></h4>
                                <p>We are on the fore-front of new technology, designs and materials when it comes to Decks, Gazebos, Pavilions and Louvered Roof Installations. We provide cutting edge 3D renderings of our projects before we get started. Our process includes best engineered plans ensuring safety and longevity of your project. We handle all construction permits and inspections on your behalf. In short, we bring the best to the table when it comes to inception and completion of your project. Which is why we have the reputation of being on of the best Deck Contractors in VA.</p>
                                <br />
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
                <div className="why-us-content-third">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-6">
                            <h1><strong>Let's get started</strong></h1>
                            <NavLink to={`/contacts`}>
                                <button className="btn btn-primary" type="button">SCHEDULE A FREE ESTIMATE TODAY</button>
                            </NavLink>                
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyUs
