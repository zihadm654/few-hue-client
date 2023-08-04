import React, { useEffect, useState } from 'react'
import Button from "../components/Button"
import { useDispatch, useSelector } from 'react-redux';
import { IoMdArrowDropleft, IoMdArrowDropright, IoIosArrowDown, IoIosClose } from "react-icons/io"
import { removeProduct, clearCart, decrementCart, getTotals, addProduct } from '../features/cartSlice';
import Footer from '../components/Footer';
import Header from '../components/Header';
const Cart = () => {
   const cartProducts = useSelector(state => state.cart.products)
   // total price
   const cartTotal = useSelector(state => state.cart.cartTotal)
   const dispatch = useDispatch()
   const [accordian, setAccordian] = useState(false)
   useEffect(() => {
      dispatch(getTotals())
   }, [cartProducts, dispatch])

   // functionalities
   const handleRemoveProduct = (product) => {
      dispatch(removeProduct(product))
   }
   const handleDecrementProduct = (product) => {
      dispatch(decrementCart(product))
   }
   const handleAddProduct = (product) => {
      dispatch(addProduct(product))
   }
   const handleClearCart = (product) => {
      dispatch(clearCart(product))
   }
   return (
      <>
      <Header></Header>
      <div className="cart__page">
         <div className="cart__left">
            <h4>Shopping Cart</h4>
            <div className="cart__products">
               {cartProducts.length === 0 ?
                  <p>no product in carts</p> :
                  cartProducts?.map(product => (
                     <div
                        key={product.id} className="cart__product">
                        <div className="cart__product--left">
                           <div className="cart__product--img">
                              <img src={product.image} alt={product.title} />
                           </div>
                           <div className="cart__product--info">
                              <h5>{product.title}</h5>
                              <div className="product__quantity">
                                 <div className='left__icon' onClick={() => handleDecrementProduct(product)}>
                                    <IoMdArrowDropleft />
                                 </div>
                                 <p>{product.quantity}</p>
                                 <div className='right__icon' onClick={() => handleAddProduct(product)}>
                                    <IoMdArrowDropright />
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="cart__product--right">
                           <div className="close__icon" onClick={() => handleRemoveProduct(product)}>
                              <IoIosClose />
                           </div>
                           <p>{product.price}</p>
                        </div>
                     </div>
                  ))
               }
            </div>
            <button onClick={() => handleClearCart(cartProducts)}>Remove all</button>
            <Button site="/products" text="Continue Shoping" />
         </div>
         <div className="cart__right">
            <h4>Cart totals</h4>
            <div className="accordian">
               <div onClick={() => setAccordian(prev => !prev)} className="coupon">
                  <h5>Add Coupon</h5>
                  <IoIosArrowDown />
               </div>
               <div className={accordian ? "sub active" : "sub"}>
                  <input type="text" placeholder="Coupon Code" />
                  <br />
                  <button type="button">Apply coupon</button>
               </div>
            </div>
            <div className="subtotal">
               <div className="price">
                  <p>Subtotal</p>
                  <p>${cartTotal}</p>
               </div>
               <div className="desc">
                  {/* <h5>Shipping</h5>
                  <div className="charge">
                     <p>USPS Priority 2-3 Day:</p>
                     <p>$5.00</p>
                  </div> */}
                  <p>Shipping to NJ.</p>
               </div>
               <div className="tax">
                  <p>Tax</p>
                  <p>$0.00</p>
               </div>
               <div className="total">
                  <p>Total</p>
                  <p>${cartTotal}</p>
               </div>
               <button type='button'>
                  Proceed to checkout
               </button>
            </div>
         </div>
      </div>
      <Footer></Footer>
      </>
   )
}

export default Cart