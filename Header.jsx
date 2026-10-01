import React,{useState} from "react";
import {Link} from "react-router-dom";
import {ShoppingBag,Search,User,Menu,X} from "lucide-react";
import {useCart} from "./CartContext.jsx";
export default function Header(){
 const {count}=useCart(); const [open,setOpen]=useState(false);
 return <header className="header">
  <button className="mobileMenu" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
  <Link className="brand" to="/">KIRUU <span>STORE</span></Link>
  <nav className={open?"nav open":"nav"}>
   <Link to="/">Home</Link><Link to="/shop">Shop</Link><Link to="/account">Account</Link>
  </nav>
  <div className="headerActions">
   <div className="searchBox"><Search size={17}/><input placeholder="Search..."/></div>
   <Link to="/login"><User/></Link>
   <Link className="bag" to="/cart"><ShoppingBag/>{count>0&&<b>{count}</b>}</Link>
  </div>
 </header>
}
