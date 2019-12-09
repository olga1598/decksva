import React from 'react';
import { NavLink } from "react-router-dom";
import "./Process.css";

const Process = () => {
    return (
        <div className="process">
            <div className="process-content-first">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <h1><strong>THE DECK GUARDIAN 5-STEP PROCESS</strong></h1>
                        <p className="process-content-first-p">The reason why Deck Guardian is Virginia’s #1 deck resurfacing and builder of outdoor spaces is because of our project methodology. Our meticulous attention to every single detail creates a uniquely professional and stress-free experience for our clients. Here’s how we do it.</p>
                        <p className="process-content-first-p"><strong>Our 5 step process is guaranteed to have any type of project completed quickly while allowing us to deliver top quality products and services.</strong></p>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
            <div className="process-content-second">
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <ol className="process-content-second-steps">
                            <li>
                                <div className="content">
                                    <h2>CONNECT</h2>
                                    <p>It all starts by you scheduling your free consultation with your local Deck Guardian office. Scheduling a consultation is easy. Call us or complete a request form on our website and a representative from your local Deck Guardian office will be in touch right away to gather preliminary information on your project, make sure you’re comfortable with our process and schedule a time to meet. </p>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <h2>CONSULT</h2>
                                    <p>From your first interaction with Deck Guardian, we want it to be clear this is all about you. During your no-obligation consultation, your Deck Guardian representative will review your property with you and talk about your project. They’ll conduct a comprehensive needs analysis to help identify exactly what you’re looking for and share some ideas of our past designs to help spark your imagination and your visualization of what we can achieve for you. </p>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <h2>DESIGN</h2>
                                    <p>Once we have a clear picture of what you’re looking for, you can choose to move forward in one of two ways. Deck Guardian can either come up a custom plan using our visualizer to illustrate your project with different options. We’ll work together to refine that custom plan to your satisfaction prior to breaking ground on your project. Or for simpler projects, you can choose from one of our existing Lifestyle Classics designs . Either way, you’ll receive an exact price quote and a detailed contract and specification sheet before construction begins. </p>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <h2>INSTALLATION</h2>
                                    <p>With our proofed job management system, your project should progress smoothly and on schedule (barring any weather or material-availability delays). Your Deck Guardian team will do it all — from securing any necessary permits to cleaning up the construction debris. And your all-important final walk-through lets you point out any issues that we can address to your complete satisfaction. </p>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <h2>ENJOY</h2>
                                    <p>There’s no doubt, your Deck Guardian project will provide years of enjoyment — our warranties guarantee it. We look forward to working together to make your outdoor project dream a reality. </p>
                                </div>
                            </li>

                       </ol>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>
            <div className="process-content-third">
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <hr />
                        <br />
                        <p>We guarantee customer satisfaction and stand behind our work. Check out The Virginia Deck Builders Warranty for more details.</p>
                        <NavLink to={`/warranty`}>
                            <button className="btn btn-primary" type="button">THE VIRGINIA DECK BUILDERS WARRANTY</button>
                        </NavLink>
                    </div>
                    <div className="col-sm-3"></div>
                </div>
            </div>
        </div>
)
}

export default Process
