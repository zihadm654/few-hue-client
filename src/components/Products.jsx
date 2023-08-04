import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from "framer-motion"
import ResponsiveDrawer from "../components/ResponsiveDrawer"
import ProductCard from './ProductCard'
import { useGetAllProductsQuery } from '../api/index.js'
// import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material'

const Products = () => {
   const [products, setProducts] = useState([])
   // const [activeCategory, setActiveCategory] = useState('')
   const { data, isLoading } = useGetAllProductsQuery()
   const [filtered, setFiltered] = useState([])

   const handleOnSearch = (e) => {
      const searchText = e.target.value;
      const matchedData = products.filter(prouduct => prouduct.category.toLowerCase().includes(searchText.toLowerCase()));
      setFiltered(matchedData)
      if (searchText === "all") {
         setFiltered(products)
      }
   }

   const handleOnClick = (handler) => {
      if (handler === 'all') {
         setFiltered(products)
      }
      else if (handler === "men's clothing") {
         const searchText = "men's clothing";
         const matchedData = products.filter(prouduct => prouduct.category.toLowerCase().includes(searchText.toLowerCase()));
         setFiltered(matchedData)
      }
      else if (handler === "jewelery") {
         const searchText = "jewelery";
         const matchedData = products.filter(prouduct => prouduct.category.toLowerCase().includes(searchText.toLowerCase()));
         setFiltered(matchedData)
      }
      else if (handler === "electronics") {
         const searchText = "electronics";
         const matchedData = products.filter(prouduct => prouduct.category.toLowerCase().includes(searchText.toLowerCase()));
         setFiltered(matchedData)
      }
      else if (handler === "women's clothing") {
         const searchText = "women's clothing";
         const matchedData = products.filter(prouduct => prouduct.category.toLowerCase().includes(searchText.toLowerCase()));
         setFiltered(matchedData)
      }
   }

   useEffect(() => {
      setProducts(data)
      setFiltered(data)
   }, [data])

   return (
      <section className='products__container'>
         <nav>
            <div className="location">
               <h3>SH<span>OP</span></h3>
            </div>
            <div className='sort__by custom-select'>
               <ResponsiveDrawer
                  products={filtered}
                  setFiltered={setFiltered}
                  handleOnSearch={handleOnSearch}
                  handleOnClick={handleOnClick}
               />
            </div>
         </nav>
         <motion.div
            layout
            className="products">
            {isLoading ? <h5>Loading...</h5> :
               <AnimatePresence>
                  {filtered?.map(({ id, image, title, price }) => (
                     <ProductCard
                        key={id}
                        id={id}
                        image={image}
                        title={title}
                        price={price} />
                  ))
                  }
               </AnimatePresence>
            }
         </motion.div>
         <div className="load__btn">
         </div>
      </section>
   )
}

export default Products
