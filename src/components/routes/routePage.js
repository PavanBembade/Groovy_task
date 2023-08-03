import React from "react";
import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "../privateRoute/PrivateRoutes";
import Product from "../Product";
import ProductDetail from "../ProductDetail";
import Cart from "../Cart";
import About from "../About"; 
import Login from "../Login";
import Signup from "../Signup";

const RoutePage = () => {
  return (
    <>
      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route exact path="/" element={<Product />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </>
  );
};

export default RoutePage;
