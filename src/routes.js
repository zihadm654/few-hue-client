import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
// import Journal from './pages/Journal';
import ProductsDetails from './pages/ProductDetails';
// import Category from "./pages/Category";
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import AddProducts from './pages/dashboardPages/AddProducts';
import Payment from './pages/dashboardPages/Payment';
import OrderList from './pages/dashboardPages/OrderList';
import DashboardHome from './pages/dashboardPages/DashboardHome';
import Jeans from './pages/dashboardPages/addProductPages/Jeans';
import Tshirt from './pages/dashboardPages/addProductPages/Tshirt';
import Shoes from './pages/dashboardPages/addProductPages/Shoes';
import JeansUpdate from './pages/dashboardPages/updateProducts/JeansUpdate';
import { AnimatePresence } from 'framer-motion';
import AdminRoute from './adminRoute/AdminRoute';

const Paths = () => {
  let location = useLocation();
  return (
    <AnimatePresence
      exitBeforeEnter
      key={location.pathName}
      Location={location}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Shop />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        {/* <Route path="/products/category/:cat" element={<Category />} /> */}
        <Route path="/contact" element={<Contact />} />
        {/* <Route path="/journal" element={<Journal />} /> */}
        <Route path="/login" element={<Login />} />
        <Route
          path="/register"
          element={
            <AdminRoute>
              <Register />
            </AdminRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <AdminRoute>
              <Dashboard />
            </AdminRoute>
          }
        >
          <Route path="/dashboard" element={<DashboardHome />} />
          <Route path="/dashboard/add-products" element={<AddProducts />}>
            <Route
              path="/dashboard/add-products/t-shirt"
              element={<Tshirt />}
            />
            <Route path="/dashboard/add-products/jeans" element={<Jeans />} />
            <Route path="/dashboard/add-products/shoes" element={<Shoes />} />
            <Route
              path="/dashboard/add-products/jeans-update/:id"
              element={<JeansUpdate />}
            />
          </Route>
          <Route path="/dashboard/order-list" element={<OrderList />} />
          <Route path="/dashboard/payment" element={<Payment />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
};

export default Paths;
