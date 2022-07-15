import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux/es/exports";
import axios from "axios";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Category from "./Pages/Category/Category";
import ProductDetails from "./Pages/ProductDetails/ProductDetails.js";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import Tags from "./components/footer/Tags";

import Checkout from "./Pages/Checkout/Checkout";
import Miniheader from "./components/header/Miniheader";
import { fillProducts, setCatgeories } from "./redux/actions/products";
import { Wrapper } from "./Styles/styles/globalStyles";
import CartProduct from "./components/cartProduct/CartProduct";
import Register from "./Pages/Register/Register";
import Login from "./Pages/login/Login";
import ProductInfo from "./Pages/Details/Details";

function App() {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        const data = await response.data;
        const productsCategories = [
          ...new Set(await data.map((item) => item.category)),
        ];
        setProducts(data);
        dispatch(fillProducts(data));
        dispatch(setCatgeories(["all categories", ...productsCategories]));
        setCatgeories(productsCategories);
      } catch (error) {
        console.log("Error getting products : ", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <Wrapper>
      <Router>
        {/* <Miniheader />
        <Header />
        <Navigation /> */}
        {/* <CartProduct name="Jacket noir" price="40" /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/detail" element={<ProductInfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    </Wrapper>
  );
}

export default App;
