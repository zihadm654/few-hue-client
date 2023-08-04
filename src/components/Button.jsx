import React from 'react'
import { Link } from "react-router-dom"
const Button = ({ site, text }) => {
   return (
      <button className='primary__btn'>
         <Link to={site}>{text}</Link>
      </button>
   )
}

export default Button