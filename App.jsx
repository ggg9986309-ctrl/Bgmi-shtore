import React from "react";
import {Routes,Route} from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import Shop from "./Shop.jsx";
import Product from "./Product.jsx";
import Cart from "./Cart.jsx";
import Login from "./Login.jsx";
import Account from "./Account.jsx";
import Admin from "./Admin.jsx";
import NotFound from "./NotFound.jsx";

export default function App(){
 return <>
  <Header/>
  <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/shop" element={<Shop/>}/>
   <Route path="/product/:id" element={<Product/>}/>
   <Route path="/cart" element={<Cart/>}/>
   <Route path="/login" element={<Login/>}/>
   <Route path="/account/*" element={<Account/>}/>
   <Route path="/admin/*" element={<Admin/>}/>
   <Route path="*" element={<NotFound/>}/>
  </Routes>
  <Footer/>
 </>;
}
