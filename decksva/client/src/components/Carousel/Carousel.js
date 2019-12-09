import React, {Component} from "react";
import { Carousel } from "react-responsive-carousel";
import reviews from "../../utils/reviews.json";


// class ReviewList extends Component {
//     state = {
//         reviews
//     }

//     render() {
//         console.log(this.state.reviews);

//         return (
//         <Carousel>
//         <div className="row">
//             <div className="col-sm-4">
//                 <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
//                 <p className="legend">Legend 1</p>    
//             </div>
//             <div className="col-sm-4">
//                 <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
//                 <p className="legend">Legend 2</p>
//                 </div>
//             <div className="col-sm-4">
//                 <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
//                 <p className="legend">Legend 3</p>
//             </div>
//         </div>
//         <div className="row">
//             <div className="col-sm-4">
//                 <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
//                 <p className="legend">Legend 1</p>    
//             </div>
//             <div className="col-sm-4">
//                 <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
//                 <p className="legend">Legend 2</p>
//             </div>
//             <div className="col-sm-4">
//                 <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
//                 <p className="legend">Legend 3</p>
//             </div>
//         </div>
//         </Carousel>
//         )
//     }
// }

// export default ReviewList;






export default () => (
  <Carousel>

    <div className="row">
        <div className="col-sm-4">
            <img src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg" />
            <p className="legend">Legend 1</p>    
        </div>
        <div className="col-sm-4">
            <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
            <p className="legend">Legend 2</p>
          </div>
        <div className="col-sm-4">
            <img src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg" />
            <p className="legend">Legend 3</p>
        </div>
    </div>
    <div className="row">
        <div className="col-sm-4">
            <img src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg" />
            <p className="legend">Legend 4</p>
        </div>
        <div className="col-sm-4">
            <img src="http://lorempixel.com/output/cats-q-c-640-480-5.jpg" />
            <p className="legend">Legend 5</p>
        </div>
        <div className="col-sm-4">
            <img src="http://lorempixel.com/output/cats-q-c-640-480-6.jpg" />
            <p className="legend">Legend 6</p>
        </div>
    </div>

    <div>
      <img src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg" />
      <p className="legend">Legend 2</p>
    </div>


  </Carousel>
);
