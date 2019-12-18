import React, { Component } from 'react';
import axios from "axios";
import "./Contacts.css";

const validEmailRegex = 
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

const validateForm = errors => {
    let valid = true;
    // we are taking whole error object and have an array of all the values after Object.value()
    Object.values(errors).forEach(
        // if we have an error string => set valid to false
        (val) => val.length > 0 && (valid = false)
        );
        return valid;
}

class Contacts extends Component {
    state = {
        fname: "",
        lname: "",
        phone1: "",
        phone2: "",
        phone3: "",
        email: "",
        text: "",
        checkbox: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        formfilled: false,
        errors: {
            fname: "",
            lname: "",
            email: "",
            phone1: "",
            phone2: "",
            phone3: "",
            address1: "",
            city: "",
            state: "",
            zip: "",
            country: ""    
          }
    }

    componentDidMount() {
        window.scrollTo(0, 0)
      }

    changeHandler = e => {
        let value = e.target.value;
        const name= e.target.name;
        console.log(value, name);
        let errors = this.state.errors;
        switch (name) {
            case "fname":
                errors.fname =
                    value.length < 3
                        ? "First name must be at least 3 characters"
                        : "";
                break;
            case "lname":
                errors.lname = 
                    value.length < 3
                        ? "Last name must be at least 3 characters"
                        : "";
                break;
            case "email":
                errors.email = validEmailRegex.test(value)
                    ? ""
                    : "Email is not valid";
                break;
            case "phone1":
                if (isNaN(value)) {
                    errors.phone1 = "Area code is not valid. It must contain only digits"
                } else if (value.length < 3){    
                    errors.phone1 = "Area code is not valid. Value should be 3 characters long"
                } else { 
                    errors.phone1 = ""
                }
                break;
            case "phone2":
                if (isNaN(value)) {
                    errors.phone2 = "Prefix is not valid. It must contain only digits"
                } else if (value.length < 3){    
                    errors.phone2 = "Prefix is not valid. Value should be 3 characters long"
                } else { 
                    errors.phone2 = ""
                }
                break;
            case "phone3":
                if (isNaN(value)) {
                    errors.phone3 = "Line is not valid. It must contain only digits"
                } else if (value.length < 4){    
                    errors.phone3 = "Line is not valid. Value should be 4 characters long"
                } else { 
                    errors.phone3 = ""
                }
                break;
            case "address1":
                errors.address1 =
                        value.length < 1
                            ? "Please enter a valid street address"
                            : "";
                break;
            case "city":
                errors.city =
                        value.length < 1
                            ? "Please enter a valid city"
                            : "";
                break;
            case "state":
                errors.state =
                        value.length < 1
                            ? "Please enter a valid state"
                            : "";
                break;
            case "zip":
                errors.zip =
                        value.length < 1
                            ? "Please enter a valid zip"
                            : "";
                break;
            case "country":
                errors.country =
                    value.length < 1
                        ? "Please enter a valid country"
                        : "";
                break;
        }
        this.setState({
            errors,
            [name]: value
        }, ()=> {console.log(errors)})
    }

    submitHandler = e => {
        e.preventDefault();
        if(validateForm(this.state.errors)) {
            console.info('Valid Form')
          }else{
            console.error('Invalid Form')
          }
        // if (this.state.fname == "" || this.state.lname == "") {
        //     alert ("Name is required");
        //     return false;
        // }

        // if (isNaN(this.state.phone1) || isNaN(this.state.phone2) || isNaN(this.state.phone3)) {
        //     alert ("Please enter a valid phone number");
        //     return false;
        // }

        // Making phone number
        let phone = [];
        phone.push(this.state.phone1);
        phone.push(this.state.phone2);
        phone.push(this.state.phone3);
        let phoneNum = phone.join("-");
       
        // this.setState({formfilled: true});

        // axios.post("/contacts", {
        //     fname: this.state.fname,
        //     lname: this.state.lname,
        //     phone: phoneNum,
        //     email: this.state.email,
        //     text: this.state.text,
        //     // checkbox: this.state.fname,
        //     address1: this.state.address1,
        //     address2: this.state.address2,
        //     city: this.state.city,
        //     state: this.state.state,
        //     zip: this.state.zip,
        //     country: this.state.country
        // }).then(res => {
        //     console.log("email is sent")
        //     console.log(res.data);
        // })
    }

    render() {
    const errors = this.state.errors;
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

                        {this.state.formfilled ? 
                            
                            <div>
                                <p>Thank you for your interest in our services. We will get back to you as soon as possible.</p>
                                <p>- Your VA DECK BUILDERS Team</p>
                            </div>
                            
                            : 

                            <div className="form-to-fill-up">
                            <form onSubmit={this.submitHandler} noValidate>
                                <div className="field-list clear">
                                    <fieldset className="form-item name required">
                                        { errors.fname.length > 0 &&
                                            <p className="error"><i class="fas fa-times"></i> { errors.fname }</p> }
                                        { errors.lname.length > 0 &&
                                            <p className="error"><i class="fas fa-times"></i> { errors.lname }</p> }

                                        <div className="title">
                                            Name 
                                            <span className="required">*</span>
                                        </div>
                                        <div className="field first-name">
                                            <label className="caption">
                                                <input className="field-element" 
                                                        name="fname" 
                                                        type="text" 
                                                        required
                                                        onChange={this.changeHandler}/>
                                                First Name
                                            </label>
                                        </div>
                                        <div className="field last-name">                                            
                                            <label className="caption">
                                                <input className="field-element" 
                                                       name="lname" 
                                                       type="text" 
                                                       required
                                                       onChange={this.changeHandler} />
                                                Last Name
                                            </label>
                                        </div>
                                    </fieldset>

                                    <fieldset className="form-item phone required">
                                        { errors.phone1.length > 0 &&
                                            <p className="error"><i class="fas fa-times"></i>{ errors.phone1 }</p> }
                                        { errors.phone2.length > 0 &&
                                            <p className="error"><i class="fas fa-times"></i>{ errors.phone2 }</p> }
                                        { errors.phone3.length > 0 &&
                                            <p className="error"><i class="fas fa-times"></i>{ errors.phone3 }</p> }
                                        <div className="title">
                                            Phone 
                                            <span className="required">*</span>
                                        </div>
                                        <div className="field three-digits">
                                            <label className="caption">
                                                <input className="field-element" 
                                                       type="text" 
                                                       maxLength="3" 
                                                       name="phone1" 
                                                       required
                                                       onChange={this.changeHandler} />
                                                (###)
                                            </label>

                                        </div>
                                        <div className="field three-digits">
                                            <label className="caption">
                                                <input className="field-element" 
                                                       type="text" 
                                                       maxLength="3" 
                                                       name="phone2" 
                                                       required
                                                       onChange={this.changeHandler} />
                                                ###
                                            </label>                                    
                                        </div>
                                        <div className="field four-digits">
                                            <label className="caption">
                                                <input className="field-element" 
                                                       type="text" 
                                                       maxLength="4" 
                                                       name="phone3" 
                                                       required
                                                       onChange={this.changeHandler} />
                                                ####
                                            </label>
                                        </div>
                                    </fieldset>

                                    <div className="form-item email required">
                                        { errors.email.length > 0 &&
                                            <span className="error"><i class="fas fa-times"></i>{ errors.email }</span> }

                                        <div className="title">
                                            Email
                                            <span className="required">*</span>
                                        </div>
                                        <input className="field-element" 
                                               type="email" 
                                               name="email" 
                                               required
                                               onChange={this.changeHandler} autoComplete="email" />
                                    </div>
                                    <div className="form-item texarea">
                                        <label className="title">
                                            Tell Us About Your Project
                                        </label>
                                        <textarea className="field-element" 
                                                  name="text" 
                                                  onChange={this.changeHandler} />
                                    </div>
                                    <div className="form-item checkbox required">
                                        <div className="title">
                                            I am Interested
                                            <span className="required">*</span>
                                        </div>
                                        <div className="description">
                                            Check all that apply
                                        </div>
                                        <div className="option">
                                            <label>
                                                <input type="checkbox" 
                                                       name="checkbox" 
                                                       value="new desk installation" />
                                                New Desk Installation
                                            </label>
                                        </div>
                                        <div className="option">
                                            <label>
                                                <input type="checkbox" 
                                                       name="checkbox" 
                                                       value="desk resurfacing" />
                                                Deck Resurfacing
                                            </label>
                                        </div>
                                        <div className="option">
                                            <label>
                                                <input type="checkbox" 
                                                       name="checkbox" />
                                                Gazebos & Pavilions
                                            </label>
                                        </div>
                                        <div className="option">
                                            <label>
                                                <input type="checkbox" 
                                                       name="checkbox" />
                                                Louvered Roofs
                                            </label>
                                        </div>
                                    </div>

                                    <fieldset className="form-item address required">
                                        { errors.address1.length > 0 &&
                                            <p className="error"><i class="fas fa-times"></i>{ errors.address1 }</p> }
                                        { errors.city.length > 0 &&
                                            <p className="error"><i class="fas fa-times"></i>{ errors.city }</p> }
                                        { errors.state.length > 0 &&
                                            <p className="error"><i class="fas fa-times"></i>{ errors.state }</p> }
                                        { errors.zip.length > 0 &&
                                            <p className="error"><i class="fas fa-times"></i>{ errors.zip }</p> }
                                        { errors.country.length > 0 &&
                                            <p className="error"><i class="fas fa-times"></i>{ errors.country }</p> }

                                        <div className="title">
                                            Address
                                            <span className="required">*</span>
                                        </div>
                                        <div className="description">
                                            Please provide us with your address for a free estimate
                                        </div>
                                        <div className="field address1">
                                            <label className="caption">
                                                <input className="field-element" 
                                                       type="text" 
                                                       name="address1" 
                                                       spellCheck="false" 
                                                       data-title="Line1" 
                                                       required
                                                       onChange={this.changeHandler} />
                                                Address 1
                                            </label>
                                        </div>
                                        <div className="field address2">
                                            <label className="caption">
                                                <input className="field-element" 
                                                       type="text" 
                                                       name="address2" 
                                                       spellCheck="false" 
                                                       data-title="Line2" 

                                                       onChange={this.changeHandler} />
                                                Address 2
                                            </label>
                                        </div>
                                        <div className="field city">
                                            <label className="caption">
                                                <input className="field-element" 
                                                       type="text" 
                                                       name="city" 
                                                       spellCheck="false" 
                                                       data-title="City" 
                                                       required
                                                       onChange={this.changeHandler} />
                                                City
                                            </label>
                                        </div>
                                        <div className="field state">
                                            <label className="caption">
                                                <input className="field-element" 
                                                       type="text" 
                                                       name="state" 
                                                       spellCheck="false" 
                                                       data-title="State" 
                                                       required
                                                       onChange={this.changeHandler} />
                                                State
                                            </label>
                                        </div>
                                        <div className="field zip">
                                            <label className="caption">
                                                <input className="field-element" 
                                                       type="text" 
                                                       name="zip" 
                                                       spellCheck="false" 
                                                       data-title="Zip" 
                                                       required
                                                       onChange={this.changeHandler} />
                                                Zip code
                                            </label>
                                        </div>
                                        <div className="field country">
                                            <label className="caption">
                                                <input className="field-element" 
                                                       type="text" 
                                                       name="country" 
                                                       spellCheck="false" 
                                                       data-title="Country" 
                                                       onChange={this.changeHandler} />
                                                Country
                                            </label>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="form-button-wrapper">
                                    <button type="submit" id="form-submit-botton" className="btn btn-primary">SUBMIT</button>
                                </div>
                            </form>
                            </div> 
                        }
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
}

export default Contacts
