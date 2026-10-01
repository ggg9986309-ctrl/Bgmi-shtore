import React from "react";
import {Link} from "react-router-dom";
import {ArrowRight} from "lucide-react";
import {products} from "./products.js";
import ProductCard from "./ProductCard.jsx";
export default function Home(){return <main>
<section className="hero"><div><p className="eyebrow">KIRUU STORE • NEW SEASON</p><h1>Shop the look.<br/><em>Own the moment.</em></h1><p className="lead">Discover curated fashion, technology and lifestyle products.</p><Link className="primary" to="/shop">Explore store <ArrowRight size={18}/></Link></div><div className="heroOrb">K</div></section>
<section className="section"><div className="sectionTitle"><div><p className="eyebrow">CURATED FOR YOU</p><h2>Featured products</h2></div><Link to="/shop">View all →</Link></div><div className="grid">{products.slice(0,4).map(p=><ProductCard key={p.id} p={p}/>)}</div></section>
</main>}
