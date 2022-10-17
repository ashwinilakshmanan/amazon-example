import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Products from "./components/Products";
import AppContext from "./contexts/AppContext";
import { useEffect, useState } from "react";
import { ProductsSearch } from "./components/ProductsSearch";
import { ProductSearchResult } from "./components/ProductSearcResult";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import ProductFilter from "./components/ProductFilter";
import SingleProduct from "./components/SingleProduct";
import Cart from "./components/Cart";
import { useSelector } from "react-redux";
import WishList from "./components/WishList";


function App() {
  const product=useSelector((state)=>{
    // console.log("@app",state)
    return state.products
    
  })
  useEffect(()=>{
//console.log("@app",product)
  },[product])
  
  return (
    <>
      <Header />
      <div className="d-flex ">
        <div className="col-lg-3">
          <ProductFilter />
        </div>
        <div className="col-lg-9 div-container ">
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Products/>}/>
            <Route path="/products/:productId" element={<SingleProduct/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/wishlist" element={<WishList/>}/>
          </Routes>
          
          {/* <ProductsSearch/>
           <ProductSearchResult/>
           <Cart/>
          <Products /> */}
        </div>
      </div>
    </>
  );
}

export default App;
