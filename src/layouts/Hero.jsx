import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { heroLeft, heroImg, stagger, textList } from "../utility/Animation"
const Hero = () => {
   return (
      <section className="hero">
         <motion.div
            variants={heroLeft}
            initial="hidden"
            animate="visible"
            className="hero__left"></motion.div>
         <div className="hero__img">
            <Link to="/products">
               <motion.img
                  initial="hidden"
                  animate="visible"
                  variants={heroImg}
                  src="https://elevennewyork.com/wp-content/uploads/2018/02/eleven_hero.jpg" alt="hero img" />
               <motion.div
                  initial='hidden'
                  animate='visible'
                  variants={stagger}
               >
                  <motion.h1
                     variants={textList}
                     className='top'>Premium</motion.h1>
                  <motion.h1
                     variants={textList}
                     className='bottom'>Athletic</motion.h1>
               </motion.div>
            </Link>
         </div>
         <div className="hero__right">
            <div className="circle__text">
               <img src="/assets/Group.svg" alt="circle" />
               <button><Link to='/products'>Shop Now</Link></button>
            </div>
         </div>
      </section>
   )
}

export default Hero