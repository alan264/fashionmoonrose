import React, { useContext, useEffect, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContext, UserProvider } from './userPage/context/UserContext';
import store from "./userPage/context/store";
import reducer from './userPage/context/productReducer';

import "./App.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import HomePage from "./userPage/pages/HomePage";
import Products from "./userPage/pages/Products";
import ProductDetail from "./userPage/pages/ProductDetail";
import Header from "./userPage/components/Header";
import Footer from "./userPage/components/Footer";
import AboutUs from "./userPage/pages/AboutUs";
import Blog from "../src/userPage/components/Blog";
import BlogDetail from "./userPage/components/BlogDetail";
import Contact from "./userPage/pages/Contact";
import Cart from "./userPage/pages/Cart";
import Account from "./userPage/pages/Account";
import Payment from "./userPage/pages/Payment";
import MyOrder from "./userPage/pages/MyOrder";
import OrderDetail from "./userPage/pages/OrderDetail";
import Favourite from "./userPage/pages/Favourite";

function App() {
  const localState = localStorage.getItem("state")
    ? JSON.parse(localStorage.getItem("state"))
    : store;
  const [state, dispatch] = useReducer(reducer, localState);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <UserProvider value={{ state, dispatch }}>
      <>
        <Header />
        <Routes >
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogdetail/:idblog" element={<BlogDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/account" element={<Account />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/order" element={<MyOrder />} />
          <Route path="/orderdetail/:idorder" element={<OrderDetail />} />
          <Route path="/favourite" element={<Favourite />} />

        </Routes>
        <Footer />
      </>
    </UserProvider>
  );
}

export default App;
