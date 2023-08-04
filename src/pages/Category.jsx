import CategoryList from "../components/CategoryList"
import { useParams } from 'react-router'
import { useEffect, useState } from "react"
import Products from "../components/Products"

const Category = () => {
   const [filterProduct, setFilterProduct] = useState([])
   const { cat } = useParams()
   useEffect(() => {
      const fetchData = async () => {
         const updateProduct = await fetch(`https://fakestoreapi.com/products/category/${cat}?sort=desc`)
         const res = await updateProduct.json()
         setFilterProduct(res)
      }
      fetchData()
   }, [cat])
   return (
      <section className="categories">
         <CategoryList />
         <Products products={filterProduct} />
      </section>
   )
}

export default Category