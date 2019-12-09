import React from 'react';
import "./Contacts.css";


function Contacts() {
    return (
        <div className="contacts">
            <div className="row">
                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <div className="contacts-content-first">
                                <h1><strong>CONTACT US</strong></h1>
                                <h4><strong>WE ARE PROUD TO BE CONSIDERED AMONGST THE TOP DECK BUILDERS IN NORTHERN VIRGINIA. CONTACT US TODAY TO GET STARTED ON YOUR PROJECT.</strong></h4>
                            </div>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                    <div className="row">
                        <div className="col-sm-1"></div>
                        <div className="col-sm-6">
                            <p><strong>Complete the form below to get Free Estimate</strong></p>
                            <form>
                                <div className="field-list clear">
                                    <fieldset className="form-item name required">
                                        <div className="title">
                                            Name 
                                            <span className="required">*</span>
                                        </div>
                                        <div className="field first-name">
                                            <label className="caption"><input className="field-element" name="fname" type="text" />First Name</label>
                                        </div>
                                        <div className="field last-name">
                                            <label className="caption"><input className="field-element" name="lname" type="text" />Last Name</label>
                                        </div>

                                    </fieldset>
                                    <fieldset className="form-item phone required">
                                        <div className="title">
                                            Phone 
                                            <span className="required">*</span>
                                        </div>
                                        <div className="field three-digits">
                                            <label className="caption"><input className="field-element" type="text" maxLength="3" />(###)</label>
                                        </div>
                                        <div className="field three-digits">
                                            <label className="caption"><input className="field-element" type="text" maxLength="3" />###</label>                                    
                                        </div>
                                        <div className="field four-digits">
                                            <label className="caption"><input className="field-element" type="text" maxLength="4" />####</label>
                                        </div>
                                    </fieldset>
                                    <div className="form-item email required">
                                        <label className="title">
                                            Email
                                            <span className="required">*</span>
                                        </label>
                                        <input className="field-element" type="email" name="email" autocomplete="email" />
                                    </div>
                                    <div className="form-item texarea">
                                        <label className="title">
                                            Tell Us About Your Project
                                        </label>
                                        <textarea className="field-element" />
                                    </div>
                                    <div className="form-item checkbox required">
                                        <div className="title">
                                            I am Interested Interested
                                            <span className="required">*</span>
                                        </div>
                                        <div className="description">
                                            Check all that apply
                                        </div>
                                        <div className="option">
                                            <label>
                                                <input type="checkbox" name="checkbox field" />New Desk Installation
                                            </label>
                                        </div>
                                        <div className="option">
                                            <label>
                                                <input type="checkbox" name="checkbox field" />Deck Resurfacing
                                            </label>
                                        </div>
                                        <div className="option">
                                            <label>
                                                <input type="checkbox" name="checkbox field" />Gazebos & Pavilions
                                            </label>
                                        </div>
                                        <div className="option">
                                            <label>
                                                <input type="checkbox" name="checkbox field" />Louvered Roofs
                                            </label>
                                        </div>
                                    </div>
                                    <fieldset className="form-item phone required">
                                        <div className="title">
                                            Address
                                            <span className="required">*</span>
                                        </div>
                                        <div className="description">
                                            Please provide us with your address for a free estimate
                                        </div>
                                        <div className="field address1">
                                            <label className="caption">
                                                <input className="field-element" type="text" name="address1" spellcheck="false" data-title="Line1" />
                                                Address 1
                                            </label>
                                        </div>
                                        <div className="field address2">
                                            <label className="caption">
                                                <input className="field-element" type="text" name="address2" spellcheck="false" data-title="Line2" />
                                                Address 2
                                            </label>
                                        </div>
                                        <div className="field city">
                                            <label className="caption">
                                                <input className="field-element" type="text" name="city" spellcheck="false" data-title="City" />
                                                City
                                            </label>
                                        </div>
                                        <div className="field state">
                                            <label className="caption">
                                                <input className="field-element" type="text" name="state" spellcheck="false" data-title="State" />
                                                State
                                            </label>
                                        </div>
                                        <div className="field zip">
                                            <label className="caption">
                                                <input className="field-element" type="text" name="zip" spellcheck="false" data-title="Zip" />
                                                Zip code
                                            </label>
                                        </div>
                                        <div className="field country">
                                            <label className="caption">
                                                <input className="field-element" type="text" name="country" spellcheck="false" data-title="Country" />
                                                Country
                                            </label>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="form-button-wrapper">
                                    <button type="submit" id="form-submit-botton" class="btn btn-primary">SUBMIT</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm-4">
                            <div className="column-content-first">
                                <p>
                                    <strong>Phone:</strong>
                                    <br />
                                    <a href="tel:2022022222">
                                        (202) 202-2222
                                    </a>
                                </p>
                            </div>
                            <div className="column-content-second">
                                <p>
                                    <strong>Hours:</strong>
                                    <br />
                                    Monday to Saturday: 8am - 7pm
                                    <br />
                                    Sunday: closed
                                </p>
                            </div>
                            <div className="column-content-third">
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
                            <div className="column-content-third">
                                <hr />
                            </div>
                            <div className="column-content-third">
                                <h3>Visit Our Sister Company</h3>
                                <p>
                                    <a className="footer-sister-company-link" href="https://www.deckguardian.com/" alt="sister-company" target="_blank" rel="noopener noreferrer">Deck Guardian</a>
                                </p>
                            </div>

                        </div>
                        <div className="col-sm-1"></div>

                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Contacts
