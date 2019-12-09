import React from 'react';
import "./Company.css"

const Company = () => {
    return (
        <div className="company">
            <div className="company-content-first">
                <h1><strong>GET TO KNOW US</strong></h1>
            </div>
            <div className="company-content-second">
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-6">
                        <div className="company-content-second-col6-image">
                            <img src="./work_img.jpg" alt="work-picture" className="col-6-image" />
                        </div>
                        <div className="company-content-second-col6-text">
                            <h4><strong>WHO ARE WE?</strong></h4>
                            <p>Virginia Deck Builders is a Northen Virginia and DC area Deck Builder. We specialize in all your Decking needs - new deck installation, deck resurfacing, gazebo and patio installation and Louvered roof installation.</p>
                            <p>We have an efficient and skilled team of deck professionals, who not only love what they do, but are deeply committed to providing the best products to our customers. Our in-house team of installers, measurement technicians, and product specialists will make sure your project is done right with minimal disruption to your home. </p>
                            <p>We believe in the “Golden Rule”. We’ll show up on time, give you a fair, reasonable quote without any sales pressure, and stand behind the finished product.</p>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="company-content-second-col4">
                            <div className="company-content-second-col4-text">
                                <h4><strong>WE BELIEVE THAT...</strong></h4>
                                <p>…Customer satisfaction comes first. Our experienced team will work with you through the entire process and answer any questions you may have.</p>
                                <p>…Doing the job right is our duty and we do it right. We have certified technicians who will deliver the best workmanship and best customer service that that will bring satisfaction for a lifetime.</p>
                                <p>…Your experience with Olympic Decks should be perfect from start to finish. Which is why we are registered and insured and we PROVIDE WARRANTIES on all of our services.</p>
                            </div>
                            <br />
                            <hr />
                            <br />
                            <div className="company-content-second-col4-image">
                                <img src="./new-deck.jpg" alt="job-picture" className="col-4-image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-1"></div>
                </div>
            </div>
            <div className="company-content-third">
                <h4><strong>PLEASE VISIT OUT SISTER COMPANY:</strong></h4>
                <a className="footer-sister-company-link" href="https://www.deckguardian.com/" alt="sister-company" target="_blank" rel="noopener noreferrer"><h4><strong>DECK GUARDIAN</strong></h4></a>
            </div>
        </div>
    )
}

export default Company
