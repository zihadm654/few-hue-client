import React, { Component } from "react";
import Slider from "react-slick";

export default class Responsive extends Component {
   render() {
      var settings = {
         
         dots: true,
         infinite: true,
         speed: 500,
         slidesToShow: 3,
         slidesToScroll: 3,
         initialSlide: 0,
         responsive: [
            {
               breakpoint: 768,
               settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2,
                   
               }
            },
            {
               breakpoint: 480,
               settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
               }
            }
         ]
      };
      return (
         <div className="carousel">
            <Slider {...settings}>
               {
                  cards.map((card, index) => (
                     <div className="card "
                        key={index}>
                        <div style={{padding:'0 0.8rem'}} className="card__img">
                           <img src={card.img} alt={card.img} />
                        </div>
                        <div className="card__desc">
                           <p>{card.desc}</p>
                           <div className="prices">
                              <p className='main__price'>{card.price}</p>
                              <p className='discount'>{card.discount}</p>
                           </div>
                        </div>
                     </div>
                  ))
               }
            </Slider>
         </div>
      );
   }
}
const cards = [
   { img: "https://elevennewyork.com/wp-content/uploads/2018/02/04_white-tee_model-back-scaled-680x935.jpg", desc: "White Cotton T-Shirt ELEVENNEWYORK", price: "$25.00", discount: "$20.00" },
   {
      img: "https://elevennewyork.com/wp-content/uploads/2018/02/04_blackstripe-tee_model-back-scaled-680x935.jpg", desc: "Black Cotton T-Shirt Sriped", price: "$25.00", discount: "$12.00"
   },
   { img: "https://elevennewyork.com/wp-content/uploads/2018/02/04_black-short_body-680x935.jpg", desc: "Black SweatShorts French Terry", price: "$50", discount: "$25" },
   {
      img: "https://elevennewyork.com/wp-content/uploads/2020/10/01_twotone-mid_leg-1-680x935.jpg", desc: "Merino Socks Two-Tone Mild",
      price: "$12.00", discount: "$5"
   }
]