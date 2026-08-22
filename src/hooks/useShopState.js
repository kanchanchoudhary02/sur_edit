import { useEffect, useState } from 'react'
export default function useShopState(){
  const [cart,setCart]=useState(()=>JSON.parse(localStorage.getItem('se-cart')||'[]'))
  const [wishlist,setWishlist]=useState(()=>JSON.parse(localStorage.getItem('se-wishlist')||'[]'))
  useEffect(()=>localStorage.setItem('se-cart',JSON.stringify(cart)),[cart])
  useEffect(()=>localStorage.setItem('se-wishlist',JSON.stringify(wishlist)),[wishlist])
  const addToCart=product=>setCart(items=>[...items,product])
  const removeCart=index=>setCart(items=>items.filter((_,i)=>i!==index))
  const toggleWish=product=>setWishlist(items=>items.some(x=>x.id===product.id)?items.filter(x=>x.id!==product.id):[...items,product])
  return {cart,wishlist,addToCart,removeCart,toggleWish,cartTotal:cart.reduce((sum,p)=>sum+Number(p.price),0)}
}
