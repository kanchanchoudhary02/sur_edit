import { useState } from 'react'
import { BrowserRouter,Routes,Route,useNavigate } from 'react-router-dom'
import TopBar from './components/TopBar'
import Header from './components/Header'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import useShopState from './hooks/useShopState'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import ContactPage from './pages/ContactPage'
import SearchPage from './pages/SearchPage'
import WishlistPage from './pages/WishlistPage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'

function Layout(){
 const shop=useShopState(); const [search,setSearch]=useState(''); const [mobile,setMobile]=useState(false); const [drawer,setDrawer]=useState(false); useNavigate()
 const shared={...shop,onAdd:shop.addToCart,openCart:()=>setDrawer(true)}
 return <div className="app-shell"><TopBar/><Header search={search} setSearch={setSearch} mobile={mobile} setMobile={setMobile} cartCount={shop.cart.length} wishlistCount={shop.wishlist.length} openCart={()=>setDrawer(true)}/>
  <Routes><Route path="/" element={<HomePage shop={shared}/>}/><Route path="/shop" element={<ShopPage shop={shared}/>}/><Route path="/contact-us" element={<ContactPage/>}/><Route path="/search" element={<SearchPage shop={shared}/>}/><Route path="/wishlist" element={<WishlistPage shop={shared}/>}/><Route path="/login" element={<LoginPage/>}/><Route path="*" element={<NotFoundPage/>}/></Routes>
  <Footer/>{drawer&&<CartDrawer cart={shop.cart} total={shop.cartTotal} removeCart={shop.removeCart} close={()=>setDrawer(false)}/>}<button className="back-top" onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>↑</button>
 </div>
}
export default function App(){return <BrowserRouter><Layout/></BrowserRouter>}
