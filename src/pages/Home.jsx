import Hero from '../layouts/Hero'
import Feature from '../layouts/Feature'
import Latest from '../layouts/Latest'
// import Phenomena from '../layouts/Phenomena'
// import Instagram from '../layouts/Instagram'
import { useEffect } from 'react'
import { getTotals } from '../features/cartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
const Home = () => {
   const cartProducts = useSelector(state => state.cart.products)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(getTotals())
   }, [cartProducts, dispatch])
   window.scroll(0, 0)
   return (
      <motion.div
         animate={{ opacity: 1 }}
         initial={{ opacity: 0 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.5 }}
      >
         <Header></Header>
         <Hero />
         <Feature />
         <Latest />
         {/* <Phenomena /> */}
         {/* <Instagram /> */}
         <Footer></Footer>
      </motion.div>
   )
}

export default Home