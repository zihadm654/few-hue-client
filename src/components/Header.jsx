import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom"

const Header = () => {
   const quantity = useSelector(state => state.cart.cartQuantity)
   const [menu, setMenu] = useState(false)
   const [sticky, setSticky] = useState(false)

   const menuHandler = () => {
      setMenu(!menu)
   }
   const stickyNav = () => {
      window.scrollY >= 65 ? setSticky(true) : setSticky(false)
   }
   window.addEventListener("scroll", stickyNav)
   return (
      <header
         className={sticky ? "header sticky" : "header"}>
         <ul className={menu ? 'links active' : "links"}>
            <li><Link to="/products">Shop</Link></li>
            <li><Link to="/contact">Contact</Link></li>
         </ul>
         <div className={menu ? "menu active" : "menu"} onClick={menuHandler}></div>
         <Link to="/" className="logo">
            <img src="/assets/Asset 27.png" alt="logo" />
         </Link>
         <div className="cart">
            <Link to="/cart">
               <h5>Cart <sup>{quantity}</sup></h5>
            </Link>
         </div>
      </header>
   )
}

export default Header