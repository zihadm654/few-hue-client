import React from 'react'
import { motion } from "framer-motion"
import Header from "../components/Header"
import Footer from "../components/Footer"
const ContactPage = () => {
   window.scroll(0, 0)
   return (
      <>
         <Header />
         <motion.section
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="contact__page">
            <h3>ContactPage</h3>
            <p>will be updated soon....</p>
         </motion.section>
         <Footer />
      </>
   )
}

export default ContactPage