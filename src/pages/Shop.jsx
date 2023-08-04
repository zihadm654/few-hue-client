import Products from "../components/Products"
import { motion } from "framer-motion"
import Header from '../components/Header'
import Footer from '../components/Footer'
const Shop = () => {
   return (
      <>
         <Header></Header>
         <motion.section
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className='shop'>
            <Products />
         </motion.section>
         <Footer></Footer>
      </>
   )
}

export default Shop