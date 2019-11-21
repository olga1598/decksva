import React from 'react';
import "./Home.css";


function Home() {
    return (
        <div className="home-inside">
            <div className="home-content-first">
                <div className="home-main-top"></div>
                <div className="home-main-center">
                    <h1>LET US BUILT YOU THE</h1>
                    <h1>DECK OF YOUR DREAMS</h1>
                    <button className="estimate-button" type="button">Request A Free Estimate</button>
                </div>
                <div className="home-main-bottom"></div>
            </div>
            <div className="home-content-second">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <p>A well-designed custom new deck will not only enhance the beauty and value of your home, it will create a functional outdoor space that you and your loved ones will enjoy for years to come.</p>
                        <p><strong>WE ARE VIRGINIA’S MOST TRUSTED DECK BUILDERS.</strong></p>
                        <p>We are proud to serve most of Washington, with few exceptions, as the foremost Deck Building and Deck Resurfacing Company in WA. We bring experience, commitment and competitive pricing to the table from initial meeting until completion of our project. We love what we do and strive to bring our A-game to every project. You can rest assured that the Olympic Decks team will go above and beyond to bring your vision to life via excellent planning, budgeting and incomparable customer service.</p>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
                <button className="btn btn-primary" type="button">LEARN ABOUT OUR PROCESS</button>
            </div>
            <div className="home-content-third">
                <h4>NEW DECK INSTALLATION * DECK RESURFACING * GASEBOS & PAVILIONS * LOUVERED ROOFS</h4>
                <h1><strong>YOUR NEW DECK IS A PHONE CALL AWAY</strong></h1>
            </div>
            <div className="home-content-forth">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-4">
                        <img className="img-sample" src="./new-deck.jpg" alt="new-deck" />
                        <p>NEW DECK INSTALLATION</p>
                    </div>
                    <div className="col-sm-4">
                        <img className="img-sample" src="./resurfacing.jpg" alt="resurfacing" />
                        <p>DECK RESURFACING</p>
                    </div>
                    <div className="col-sm-2"></div>

                </div>
                <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-4">
                    <img className="img-sample" src="./new-deck.jpg" alt="new-deck" />
                    <p>GAZEBOS & PAVILIONS</p>
                </div>
                <div className="col-sm-4">
                    <img className="img-sample" src="./resurfacing.jpg" alt="resurfacing" />
                    <p>LOUVERED ROOFS</p>
                </div>
                <div className="col-sm-2"></div>

            </div>

            </div>
        </div>
    )
}

export default Home;
 