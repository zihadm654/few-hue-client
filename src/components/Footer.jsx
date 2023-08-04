import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
   return (
      <footer className='footer'>
         <div className="footer__desc">
            <p>Sign up to our Newsletter</p>
            <p>Get 20% off for your first order</p>
            <input type="text" placeholder='Your email address' />
            <br />
            <button>Subscribe</button>
         </div>
         <div className="footer__links">
            <ul>
               <li><Link to="/about">About Us</Link></li>
               <li><Link to="/faq">FAQ</Link></li>
               <li><Link to="/returns">Shipping & Returns</Link></li>
               <li><Link to="/terms">Terms & Use</Link></li>
               <li><Link to="/Privacy Policy">Privacy Policy</Link></li>
               <li><Link to="/contact">Contact</Link></li>
            </ul>
         </div>
      </footer>
   )
}

export default Footer