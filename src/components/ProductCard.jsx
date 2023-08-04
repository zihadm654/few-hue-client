import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
const ProductCard = ({ id, image, title, price }) => {
   return (
      <motion.div
         layout
         initial={{ opacity: 0, scale: 0 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: .3 }}
         exit={{ opacity: 0 }}
         className="product">
         <Link to={`/products/${id}`}>
            <img src={image} alt={title} />
            <div className="product__info">
               <p>{title}</p>
               <p className="price">${price}</p>
            </div>
         </Link>
      </motion.div>
   )
}

export default ProductCard