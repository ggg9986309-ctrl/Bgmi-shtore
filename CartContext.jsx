import React,{createContext,useContext,useMemo,useState} from "react";
const CartContext=createContext(null);
export function CartProvider({children}){
 const [items,setItems]=useState([]);
 const add=p=>setItems(x=>[...x,p]);
 const remove=i=>setItems(x=>x.filter((_,n)=>n!==i));
 const value=useMemo(()=>({items,add,remove,count:items.length,total:items.reduce((s,p)=>s+p.price,0)}),[items]);
 return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
export const useCart=()=>useContext(CartContext);
