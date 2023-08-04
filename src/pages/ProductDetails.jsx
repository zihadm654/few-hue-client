import React, { useEffect } from 'react'
import { useParams, useLocation } from 'react-router'
import { addProduct, getTotals } from "../features/cartSlice"
import { useDispatch, useSelector } from 'react-redux'
import { removeProductDetails } from '../features/productsSlice'
import { useProductDetailsQuery } from "../api/index"
import Footer from '../components/Footer'
import Header from '../components/Header'
import Title from "react-vanilla-tilt";

const ProductDetails = () => {
   const { id } = useParams(null)
   const { pathname } = useLocation()
   const { data, error, isLoading } = useProductDetailsQuery(id)
   const dispatch = useDispatch()
   const cartProducts = useSelector(state => state.cart.products)
   const options = {
      max: 30,
      scale: 1.0,
      speed: 1000
   };
   // const currentProduct = cartProducts?.find(x => {
   //    return x.id === id
   // })

   useEffect(() => {
      dispatch(getTotals())
      return () => {
         dispatch(removeProductDetails())
      }
   }, [cartProducts, dispatch])

   const handleClick = () => {
      dispatch(
         addProduct(data)
      )
   }
   // const handleDecrementProduct = () => {
   //    dispatch(removeProduct(data))
   // }
   return (
      <>
         <Header></Header>
         <section className='product__details'>
            {isLoading ? (
               <p>loading...</p>
            ) : error ? (
               <p>error occured...</p>
            ) : (
               <>
                  <div className="location">
                     <p>{`Home ${pathname}`}</p>
                  </div>
                  <div className="product">
                     <Title
                        className="tilt"
                        options={options}>
                        <div className="product__img">
                           <img src={data.image} alt={data.title} />
                        </div>
                     </Title>
                     <div className="product__info">
                        <h4>{data.title}</h4>
                        <div className="price">
                           <p>{data.price}</p>
                        </div>
                        <div className="desc">
                           <h5>Description</h5>
                           <p>{data.description}</p>
                        </div>
                        <div className="details">
                           <h5>Details</h5>
                           <p>Your Sizes</p>
                        </div>
                        <table cellSpacing="0" className='variations'>
                           <tbody>
                              <tr>
                                 <td className='label'>
                                    <label htmlFor="colors">Color</label>
                                 </td>
                                 <td className='value'>
                                    <div className="custom-select">
                                       <select name="colors" id="colors">
                                          <option value="blue">Blue</option>
                                          <option value="red">Black</option>
                                          <option value="white">White</option>
                                       </select>
                                       <span className="custom-arrow"></span>
                                    </div>
                                 </td>
                              </tr>
                              <tr>
                                 <td className="label">
                                    <label>Size</label>
                                 </td>
                                 <td className='value'>
                                    <div className="custom-select">
                                       <select name="size" id="size">
                                          <option value="default">Choose and option</option>
                                          <option value="s">S</option>
                                          <option value="m">M</option>
                                          <option value="l">L</option>
                                          <option value="xl">XL</option>
                                       </select>
                                       <span className="custom-arrow"></span>
                                    </div>
                                 </td>
                              </tr>
                              {/* <tr className="quantity">
                              <td className='label'>
                                 <label htmlFor="quantity">Quantity</label>
                              </td>
                              <td className='value'>
                                 <button onClick={handleClick}>+</button>
                                 <p>{"0"}</p>
                                 <button onClick={handleDecrementProduct}>-</button>
                              </td>
                           </tr> */}
                           </tbody>
                        </table>
                        <button onClick={handleClick}>Add to Cart</button>
                     </div>
                  </div>
               </>
            )
            }
         </section>
         <Footer></Footer>
      </>
   )
}

export default ProductDetails