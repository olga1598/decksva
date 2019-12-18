import React from 'react';
import { NavLink } from "react-router-dom";
import "./Header.css";


function Header() {
    return (
        <div className="header-content">
        <div className="row">
        <div className="col-sm-6">

            <div className="header-top-left">
            <NavLink to="/">
                    <img src="/logo1.jpg" alt="logo" className="logo" />
                </NavLink>   
            </div>
        </div>
        
        <div className="col-sm-6">
        <div className="header-top-right">
                    <span className="header-phone">
                    <a className="header-phone-number" href="tel:2022022222">
                        <i className="fas fa-phone"> 202-202-2222</i>
                    </a>
                    </span>
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
        </div>
        </div>
       
        </div>
    )
}

export default Header


// <div className="header-content">
// <div className="row">
// <div className="col-sm-5">

//     <div className="header-top-left">
//         <a className="header-logo" href="/">    
//             <img src="/logo1.jpg" alt="logo" className="logo" />
//         </a>           
//     </div>
// </div>
// <div className="col-sm-5">

//     <div className="header-top-right">
//         <div className="header-phone">
//             <a className="header-phone-number" href="tel:2022022222">
//                 <i class="fas fa-phone">202-202-2222</i>
//             </a>
//         </div>
//         <div className="social-links">
//             <a className="social-links facebook" href="https://www.facebook.com/virginiadeckbuilders/" target="_blank" rel="noopener noreferrer">
//                 <i class="fab fa-facebook"></i>
//             </a>
//             <a className="social-links houzz" href="https://www.houzz.com/professionals/decks-patios-and-outdoor-enclosures/virginia-deck-builders-pfvwus-pf~1706389953" target="_blank" rel="noopener noreferrer">
//                 <i class="fab fa-houzz"></i>
//             </a>
//             <a className="social-links yelp" href="https://www.yelp.com/biz/virginia-deck-builders-alexandria-7?osq=virginia+deck+builders" target="_blank" rel="noopener noreferrer">
//                 <i class="fab fa-yelp"></i>
//             </a>

//         </div>
//     </div>
// </div>
// </div>
// </div>

