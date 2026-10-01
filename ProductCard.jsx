import React from "react";
import {Link} from "react-router-dom";
import {Star} from "lucide-react";
import {useCart} from "./CartContext.jsx";
export default function ProductCard({p}){
 const {add}=useCart();
 return <article className="productCard"><Link to={"/product/"+p.id} className="productVisual"><span>{p.emoji}</span><label>SALE</label></Link><div className="productInfo"><Link to={"/product/"+p.id}><h3>{p.name}</h3></Link><p>{p.category}</p><div className="rating"><Star size={13} fill="currentColor"/> {p.rating}</div><strong>₹{p.price.toLocaleString()} <del>₹{p.oldPrice.toLocaleString()}</del></strong><button onClick={()=>add(p)}>Add to cart</button></div></article>
}
