import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Feature = () => {
   return (
      <section className="feature__group">
         <div className='feature first'>
            <div className="feature__img first__img">
               <Link to="/products/men's clothing">
                  <img src="https://elevennewyork.com/wp-content/uploads/2020/09/feature_frenchterry-1536x1057.jpg" alt="" />
               </Link>
            </div>
            <div className="feature__desc">
               <h3>Classic French Terry Pants & Shorts</h3>
               <p>Made from an incredibly soft, heavyweight French Terry cotton, with high-end flat-lock stitching for extra strength and support in the most important areas.</p>
               <Button site='/products/category/electronics' text="Shop All Pants & Shorts" />
            </div>
         </div>
         <div className="feature second">
            <div className="feature__desc">
               <h3>Luxurious Merino Socks</h3>
               <p>Knit from a silky smooth Merino Wool yarn with naturally occurring benefits and using the finest Italian machinery available. You won’t wear a more comfortable or better looking sock.</p>
               <Button site='/products/category/jewelery' text="Shop All Shocks" />
            </div>
            <div className="feature__img second__img">
               <Link to="products/category/man's clothing">
                  <img src="https://elevennewyork.com/wp-content/uploads/2020/09/feature_socks-1536x1462.jpg" alt="socks" />
               </Link>
            </div>
         </div>
      </section>
   )
}

export default Feature