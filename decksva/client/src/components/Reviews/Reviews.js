import React, { Component} from 'react';
import { NavLink } from "react-router-dom";
import reviews from "../../utils/reviews.json";
import Carousel from "../Carousel/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./Reviews.css";


class Reviews extends Component {
    state = {
        reviews
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
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div className="row" id="reviews-content-second-inside">
                                        <div className="col-sm-4">
                                            <hr />
                                            <p>{this.state.reviews[0].text}</p>
                                            <p><strong>{this.state.reviews[0].name}</strong></p>
                                        </div>
                                        <div className="col-sm-4">
                                            <hr />
                                            <p>{this.state.reviews[1].text}</p>
                                            <p><strong>{this.state.reviews[1].name}</strong></p>
                                        </div>
                                        <div className="col-sm-4">
                                            <hr />
                                            <p>{this.state.reviews[2].text}</p>
                                            <p><strong>{this.state.reviews[2].name}</strong></p>
                                        </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="..." alt="Second slide" />
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="..." alt="Third slide" />
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                <span class="carousel-control-next-icon"></span>
                                <span class="sr-only">Next</span>
                            </a>
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
