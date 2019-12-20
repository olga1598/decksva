import React, { Component} from 'react';
import { NavLink } from "react-router-dom";
import reviews from "../../utils/reviews.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./Reviews.css";


class Reviews extends Component {
    state = {
        reviews
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        // let m = document.getElementsByClassName('reviews-content-second')[0];
        // m.slick({
        //     dots: true,
        //     infinite: false,
        //     speed: 300,
        //     slidesToShow: 4,
        //     slidesToScroll: 4,
        //     responsive: [
        //       {
        //         breakpoint: 1024,
        //         settings: {
        //           slidesToShow: 3,
        //           slidesToScroll: 3,
        //           infinite: true,
        //           dots: true
        //         }
        //       },
        //       {
        //         breakpoint: 600,
        //         settings: {
        //           slidesToShow: 2,
        //           slidesToScroll: 2
        //         }
        //       },
        //       {
        //         breakpoint: 480,
        //         settings: {
        //           slidesToShow: 1,
        //           slidesToScroll: 1
        //         }
        //       }
        //     ]
        //   });
    }

    render() {
        console.log(this.state.reviews);

        return (
            <div className="reviews">
                <div className="reviews-content-first">
                    <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-6">
                                <p className="">Our extensive client list and raving client reviews are a testament to our impeccable reputation. Take a look at what our clients have to say about us.</p>
                                <br />
                                <h1><strong>CLIENT REVIEWS</strong></h1>
                        </div>
                        <div className="col-sm-3"></div>
                    </div>
                </div>
                <div className="reviews-content-second">
                <div className="row">
                    <div className="col-sm-12">
                        <div id="carouselExampleControls" class="carousel slide">

                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
                                <li data-target="#carouselExampleControls" data-slide-to="3"></li>
                                <li data-target="#carouselExampleControls" data-slide-to="4"></li>
                            </ol>

                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row" id="reviews-content-second-inside">
                                        <div className="col-sm-4">
                                            <div className="review-content">
                                                <hr />
                                                <p>{this.state.reviews[0].text}</p>
                                                <p><strong>-- {this.state.reviews[0].name}</strong></p>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="review-content">
                                                <hr />
                                                <p>{this.state.reviews[1].text}</p>
                                                <p><strong>-- {this.state.reviews[1].name}</strong></p>
                                            </div>
                                        </div>
                                        <div className="col-sm-4">
                                            <div className="review-content">
                                                <hr />
                                                <p>{this.state.reviews[2].text}</p>
                                                <p><strong>-- {this.state.reviews[2].name}</strong></p>
                                            </div>                         
                                        </div>           
                                    </div>
                                </div>
                                
                                <div className="carousel-item">
                                    <div className="row" id="reviews-content-second-inside">
                                        <div className="col-sm-4">
                                            <hr />
                                            <p>{this.state.reviews[3].text}</p>
                                            <p><strong>-- {this.state.reviews[3].name}</strong></p>
                                        </div>
                                        <div className="col-sm-4">
                                            <hr />
                                            <p>{this.state.reviews[4].text}</p>
                                            <p><strong>-- {this.state.reviews[4].name}</strong></p>
                                        </div>
                                        <div className="col-sm-4">
                                            <hr />
                                            <p>{this.state.reviews[5].text}</p>
                                            <p><strong>-- {this.state.reviews[5].name}</strong></p>
                                        </div>
                                    </div>
    
                                </div>
                                
                                <div className="carousel-item">
                                    <div className="row" id="reviews-content-second-inside">
                                        <div className="col-sm-4">
                                            <hr />
                                            <p>{this.state.reviews[6].text}</p>
                                            <p><strong>-- {this.state.reviews[6].name}</strong></p>
                                        </div>
                                        <div className="col-sm-4">
                                            <hr />
                                            <p>{this.state.reviews[7].text}</p>
                                            <p><strong>-- {this.state.reviews[7].name}</strong></p>
                                        </div>
                                        <div className="col-sm-4">
                                            <hr />
                                            <p>{this.state.reviews[8].text}</p>
                                            <p><strong>-- {this.state.reviews[8].name}</strong></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="row" id="reviews-content-second-inside">
                                        <div className="col-sm-4">
                                            <hr />
                                            <p>{this.state.reviews[9].text}</p>
                                            <p><strong>-- {this.state.reviews[9].name}</strong></p>
                                        </div>
                                        <div className="col-sm-4">
                                            <hr />
                                            <p>{this.state.reviews[10].text}</p>
                                            <p><strong>-- {this.state.reviews[10].name}</strong></p>
                                        </div>
                                        <div className="col-sm-4">
                                            <hr />
                                            <p>{this.state.reviews[11].text}</p>
                                            <p><strong>-- {this.state.reviews[11].name}</strong></p>
                                        </div>
                                    </div>
                                </div>

                                <div className="carousel-item">
                                    <div className="row" id="reviews-content-second-inside">
                                        <div className="col-sm-4">
                                            <hr />
                                            <p>{this.state.reviews[12].text}</p>
                                            <p><strong>-- {this.state.reviews[12].name}</strong></p>
                                        </div>
                                        <div className="col-sm-4">
                                            <hr />
                                            <p>{this.state.reviews[13].text}</p>
                                            <p><strong>-- {this.state.reviews[13].name}</strong></p>
                                        </div>
                                        <div className="col-sm-4">
                                            <hr />
                                            <p>{this.state.reviews[14].text}</p>
                                            <p><strong>-- {this.state.reviews[14].name}</strong></p>
                                        </div>
                                    </div>
                                </div>


                                
                            </div>

                            <div className="carousel-controls">
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon"></span>
                                    <span className="sr-only">Next</span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

                <div className="reviews-content-third">
                    <div className="reviews-content-third-estimate-button">
                        <NavLink to={`/contacts`}>
                            <button className="btn btn-primary" type="button">GET YOUR FREE ESTIMATE TODAY</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}

export default Reviews


// <div className="reviews-content-second">
// <div className="row">
//     <div className="col-sm-12">
//         <div id="carouselExampleControls" class="carousel slide">

//             <ol class="carousel-indicators">
//                 <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
//                 <li data-target="#carouselExampleControls" data-slide-to="1"></li>
//                 <li data-target="#carouselExampleControls" data-slide-to="2"></li>
//                 <li data-target="#carouselExampleControls" data-slide-to="3"></li>
//                 <li data-target="#carouselExampleControls" data-slide-to="4"></li>
//             </ol>

//             <div className="carousel-inner">
//                 <div className="carousel-item active">
//                     <div className="row" id="reviews-content-second-inside">
//                         <div className="col-sm-4">
//                             <hr />
//                             <p>{this.state.reviews[0].text}</p>
//                             <p><strong>-- {this.state.reviews[0].name}</strong></p>
//                         </div>
//                         <div className="col-sm-4">
//                             <hr />
//                             <p>{this.state.reviews[1].text}</p>
//                             <p><strong>-- {this.state.reviews[1].name}</strong></p>
//                         </div>
//                         <div className="col-sm-4">
//                             <hr />
//                             <p>{this.state.reviews[2].text}</p>
//                             <p><strong>-- {this.state.reviews[2].name}</strong></p>
//                         </div>
//                     </div>
//                 </div>
                
//                 <div className="carousel-item">
//                     <div className="row" id="reviews-content-second-inside">
//                         <div className="col-sm-4">
//                             <hr />
//                             <p>{this.state.reviews[3].text}</p>
//                             <p><strong>-- {this.state.reviews[3].name}</strong></p>
//                         </div>
//                         <div className="col-sm-4">
//                             <hr />
//                             <p>{this.state.reviews[4].text}</p>
//                             <p><strong>-- {this.state.reviews[4].name}</strong></p>
//                         </div>
//                         <div className="col-sm-4">
//                             <hr />
//                             <p>{this.state.reviews[5].text}</p>
//                             <p><strong>-- {this.state.reviews[5].name}</strong></p>
//                         </div>
//                     </div>

//                 </div>
                
//                 <div className="carousel-item">
//                     <div className="row" id="reviews-content-second-inside">
//                         <div className="col-sm-4">
//                             <hr />
//                             <p>{this.state.reviews[6].text}</p>
//                             <p><strong>-- {this.state.reviews[6].name}</strong></p>
//                         </div>
//                         <div className="col-sm-4">
//                             <hr />
//                             <p>{this.state.reviews[7].text}</p>
//                             <p><strong>-- {this.state.reviews[7].name}</strong></p>
//                         </div>
//                         <div className="col-sm-4">
//                             <hr />
//                             <p>{this.state.reviews[8].text}</p>
//                             <p><strong>-- {this.state.reviews[8].name}</strong></p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="carousel-item">
//                     <div className="row" id="reviews-content-second-inside">
//                         <div className="col-sm-4">
//                             <hr />
//                             <p>{this.state.reviews[9].text}</p>
//                             <p><strong>-- {this.state.reviews[9].name}</strong></p>
//                         </div>
//                         <div className="col-sm-4">
//                             <hr />
//                             <p>{this.state.reviews[10].text}</p>
//                             <p><strong>-- {this.state.reviews[10].name}</strong></p>
//                         </div>
//                         <div className="col-sm-4">
//                             <hr />
//                             <p>{this.state.reviews[11].text}</p>
//                             <p><strong>-- {this.state.reviews[11].name}</strong></p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="carousel-item">
//                     <div className="row" id="reviews-content-second-inside">
//                         <div className="col-sm-4">
//                             <hr />
//                             <p>{this.state.reviews[12].text}</p>
//                             <p><strong>-- {this.state.reviews[12].name}</strong></p>
//                         </div>
//                         <div className="col-sm-4">
//                             <hr />
//                             <p>{this.state.reviews[13].text}</p>
//                             <p><strong>-- {this.state.reviews[13].name}</strong></p>
//                         </div>
//                         <div className="col-sm-4">
//                             <hr />
//                             <p>{this.state.reviews[14].text}</p>
//                             <p><strong>-- {this.state.reviews[14].name}</strong></p>
//                         </div>
//                     </div>
//                 </div>


                
//             </div>

//             <div className="carousel-controls">
//                 <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
//                     <span className="carousel-control-prev-icon"></span>
//                     <span className="sr-only">Previous</span>
//                 </a>
//                 <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
//                     <span className="carousel-control-next-icon"></span>
//                     <span className="sr-only">Next</span>
//                 </a>
//             </div>

//         </div>
//     </div>
// </div>
// </div>
