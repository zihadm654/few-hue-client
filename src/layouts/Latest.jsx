import React from 'react'
import Carousel from "../components/Carousel"

const Latest = () => {
   return (
      <section className='latest'>
         <div className="latest__title">
            <h4>Latest Products</h4>
         </div>
         {/* <div className="carousel"> */}
         <Carousel />
         {/* </div> */}
      </section>
   )
}

export default Latest