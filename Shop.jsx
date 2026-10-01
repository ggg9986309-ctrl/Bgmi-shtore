import React,{useState} from "react";
import {products} from "./products.js";
import ProductCard from "./ProductCard.jsx";
export default function Shop(){const[q,setQ]=useState("");const list=products.filter(p=>(p.name+p.category).toLowerCase().includes(q.toLowerCase()));return <main className="section"><div className="sectionTitle"><div><p className="eyebrow">COLLECTION</p><h2>All products</h2></div><input className="filterInput" value={q} onChange={e=>setQ(e.target.value)} placeholder="Search products"/></div><div className="grid">{list.map(p=><ProductCard key={p.id} p={p}/>)}</div></main>}
