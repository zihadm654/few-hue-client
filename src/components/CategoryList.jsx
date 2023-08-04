import React, { useState, useEffect } from 'react'
import { BiSearch } from "react-icons/bi"
import { MdClose } from "react-icons/md"
import { Link } from 'react-router-dom'
import Filters from './Filters'
import ResponsiveDrawer from "./ResponsiveDrawer"
const CategoryList = ({ products, setFiltered, activeCategory, setActiveCategory }) => {
   const [search, setSearch] = useState("")
   // const [sticky, setSticky] = useState(false)
   useEffect(() => {
      const filtered = products?.filter((product) =>
         product.category.includes(activeCategory)
      )
      setFiltered(filtered)
      //all products
      if (activeCategory === "All") {
         setFiltered(products)
      }
   }, [activeCategory, products, setActiveCategory, setFiltered])
   const handleInput = (e) => {
      setSearch(e.target.value)
   }

   return (
      <>
         <div className={"catagory__lists"}>
            <h5>Search</h5>
            <div className='search__container'>
               <input placeholder='Search for products...'
                  className='search'
                  onChange={handleInput}
                  type="text" /> {search.length === 0 ? <BiSearch /> : <MdClose />}
               {search ? <div className="search__lists">
                  {products?.filter(product => product.title.toLowerCase().includes(search)).map(product => {
                     return (
                        <>
                           {search.length === 0 ?
                              null :
                              <Link to={`/products/${product.id}`} key={product.id}>
                                 {product.title}
                              </Link>
                           }
                        </>
                     )
                  })}
               </div> : null}
            </div>

            <ResponsiveDrawer />
            <Filters />
         </div>
      </>
   )
}

export default CategoryList