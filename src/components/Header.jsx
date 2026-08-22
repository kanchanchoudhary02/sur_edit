import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { categories, subCategories } from '../data/categories'
import Icon from './Icon'

export default function Header({search,setSearch,mobile,setMobile,cartCount,wishlistCount,openCart}) {
  const navigate = useNavigate()
  const [scrolled,setScrolled] = useState(false)
  useEffect(()=>{const fn=()=>setScrolled(window.scrollY>30);window.addEventListener('scroll',fn);return()=>window.removeEventListener('scroll',fn)},[])
  const go=(path)=>{navigate(path);setMobile(false)}
  const submit=e=>{e.preventDefault();navigate(`/search?q=${encodeURIComponent(search)}`)}

  return <header className={`site-header ${scrolled?'header-scrolled':''}`}>
    <div className="header-inner">
      <button className="mobile-trigger" onClick={()=>setMobile(!mobile)} aria-label="Open menu"><Icon name="menu"/></button>
      <button className="brand" onClick={()=>go('/')} aria-label="Sur-Earth home">
        <img src="/assets/store/logos/main.png" alt="Sur-Earth"/>
      </button>

      <nav className={`main-nav ${mobile?'is-open':''}`}>
        <button onClick={()=>go('/')}>Home</button>
        <div className="nav-parent">
          <button className="active-nav">Shop <Icon name="chevron" size={13}/></button>
          <div className="mega-menu">
            {categories.map(category=><div key={category} className={`mega-item ${subCategories[category]?'has-sub':''}`}>
              <button onClick={()=>go(`/shop?category=${encodeURIComponent(category)}`)}><span>{category}</span>{subCategories[category]&&<span>›</span>}</button>
              {subCategories[category]&&<div className="sub-menu">{subCategories[category].map(item=><button key={item} onClick={()=>go(`/shop?category=${encodeURIComponent(item)}`)}>{item}</button>)}</div>}
            </div>)}
          </div>
        </div>
        <button onClick={()=>go('/contact-us')}>Contact</button>
      </nav>

      <div className="header-actions">
        <form className="search-box" onSubmit={submit}><Icon name="search" size={18}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search the edit..."/></form>
        <button className="icon-button" title="Account" onClick={()=>go('/login')}><Icon name="user"/></button>
        <button className="icon-button badge-wrap" title="Wishlist" onClick={()=>go('/wishlist')}><Icon name="heart"/>{wishlistCount>0&&<b>{wishlistCount}</b>}</button>
        <button className="icon-button badge-wrap" title="Cart" onClick={openCart}><Icon name="bag"/>{cartCount>0&&<b>{cartCount}</b>}</button>
      </div>
    </div>
  </header>
}
