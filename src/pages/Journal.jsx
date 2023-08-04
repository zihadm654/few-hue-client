import React from 'react'
import { motion } from 'framer-motion'
const Journal = () => {
   return (
      <motion.section
         animate={{ opacity: 1 }}
         initial={{ opacity: 0 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.5 }}
         className="journal">
         <h3>Journal</h3>
         <p>will be updated soon...</p>
      </motion.section>
   )
}

export default Journal