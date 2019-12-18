import React from 'react';
import { NavLink } from "react-router-dom";
import "./Resurfacing.css";


function Resurfacing() {
    return (
        <div className="resurfacing-inside">
            <div className="resurfacing-content-first">
                <div className="resurfacing-main-top"></div>
                <div className="resurfacing-main-center">
                    <h1>DECK</h1>
                    <h1>RESURFACING</h1>
                    <NavLink to={`/contacts`}>
                        <button className="estimate-button" type="button">Request A Free Estimate</button>
                    </NavLink>
                </div>
                <div className="resurfacing-main-bottom"></div>
            </div>
            <div className="resurfacing-content-second">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <h1><strong>SHOULD I RESURFACE</strong></h1>
                        <h1><strong>MY DECK?</strong></h1>
                        <p>If the boards on your existing deck are looking a bit worn, but the foundation and deck framing system are sound, you can simply replace the walking surfaces and deck railings with new #1 grade pressure treated lumber or HIGH PERFORMANCE composite giving you a brand new surface! RESURFACE & SAVE BIG!</p>
                        <h4><strong>NOT SURE?</strong></h4>
                        <p>Give us a call and we will help you decide if deck resurfacing is a viable option for you.</p>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
                <NavLink to="/contacts">
                    <button className="btn btn-primary" type="button">SCHEDULE A CONSULTATION WITH US</button>
                </NavLink>
            </div>
            <div className="resurfacing-content-third">
                <div className="row">
                    <div className="col-sm-4">
                        <img src="./new-deck.jpg" alt="why-choose-us-1" className="why-us-image" />
                    </div>
                    <div className="col-sm-4">
                        <img src="./resurfacing.jpg" alt="why-choose-us-2" className="why-us-image" />
                    </div>
                    <div className="col-sm-4">
                        <img src="./picture1.jpg" alt="why-choose-us-3" className="why-us-image" />
                    </div>
                </div>
            </div>
            <div className="resurfacing-content-forth">
                <div className="spacer"></div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <h4><strong>Our 5-STEP Resurfacing System will get your old deck looking like new in no time.</strong></h4>
                        <h1><strong>HERE'S HOW IT WORKS!</strong></h1>
                        <br />
                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8">
                                <p>
                                    <span><strong>STEP 1.</strong></span>
                                    <br />
                                    Safety inspection, checking joists spacing and overall condition of framing to determine if the substructure is sound, and what repairs are needed.
                                </p> 
                                <p>
                                    <span><strong>STEP 2.</strong></span>
                                    <br />
                                    After obtaining any necessary building permits, carefully removing and discard the old decking and railing, leaving the substructure and framing in place.
                                </p> 
                                <p>
                                    <span><strong>STEP 3.</strong></span>
                                    <br />
                                    Performing all necessary repairs on the substructure and inspect all framing/framing hardware for code compliance, structural integrity and compliance with the current building code.
                                </p> 
                                <p>
                                    <span><strong>STEP 4.</strong></span>
                                    <br />
                                    Installation on new deck and rails as required by local building code.
                                </p> 
                                <p>
                                    <span><strong>STEP 5.</strong></span>
                                    <br />
                                    Work site clean up.
                                </p> 
                                <NavLink to="/contacts">
                                    <button className="btn btn-primary" type="button">REQUEST A FREE ESTIMATE</button>
                                </NavLink>   
                            </div>
                            <div className="col-sm-2"></div>
                        </div>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
            <div className="resurfacing-content-fifth">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <h1><strong>CHOOSING THE RIGHT MATERIALS FOR RESURFACING THE DECK</strong></h1>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
                <div className="spacer"></div>
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4">
                        <h4><strong>Treated Wood Decks</strong></h4>
                        <p><em>Pressure treated lumber is the most common type of decking material and is typically made from pine. Benefits of choosing this type of wood include:</em></p>
                        <p><strong>Lower Cost.</strong></p>
                        <p>This type of material is less expensive to manufacturer, thus lowering the total cost of construction. What this means for you is a high quality deck at a lower price. You can even use the money you save to buy deck accessories.</p>
                        <p><strong>Protection.</strong></p>
                        <p>Compared to untreated wood, pressure treated lumber is better protected from rotting, fungus, and bug infestation. This will save your deck in the longer and ensure that you won’t have to replace or repair it any time soon.</p>
                        <p><strong>More Traditional.</strong></p>
                        <p>Wood decks have a more classic look and feel to them. They compliment older or more traditional looking homes as well. If you want a more modern look, stains are available which can update the overall aesthetic of the deck.</p>
                    </div>
                    <div className="col-sm-4">
                        <h4><strong>Composite Decks</strong></h4>
                        <p><em>Composite decks emulate the appearance of actual wood while minimizing the downsides. Composite decks have numerous benefits, including:</em></p>
                        <p><strong>Increased Durability.</strong></p>
                        <p>Composite decks are made from synthetic material that is capable of withstanding more wear and tear than traditional wood. It is also more resistant to weather and isn’t subject to rotting.</p>
                        <p><strong>Increased Longevity.</strong></p>
                        <p>A composite deck will typically last longer than a wood deck. Its increased durability and limited need for consistent upkeep increase its lifespan as compared to wood decks.</p>
                        <p><strong>No Painting or Staining.</strong></p>
                        <p>Composite decks come pre-colored, so there is no need to apply a stain or paint. This saves you time and money, now and in the future.</p>
                        <p><strong>Safe for Children and Pets.</strong></p>
                        <p>No need to worry about splinters with this deck material, vinyl does not break apart like wood does. Let your kids and pets roam free without anxiety.</p>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
                <div className="resurfacing-content-fifth-extra-block">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <h3>Traditional Treated Wood or Composite Decking. What’s right for me?</h3>
                            <NavLink to="/contacts">
                                <button className="btn btn-primary" type="button">LET US HELP YOU FIGURE OUT</button>
                            </NavLink>   
                        </div>
                        <div className="col-sm-2"></div>                   
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Resurfacing
