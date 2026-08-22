import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'
export default function ShopPage({shop}){
 const [params]=useSearchParams(); const category=params.get('category')
 const visible=useMemo(()=>category?products.filter(p=>p.category.toLowerCase().includes(category.toLowerCase().replace(' combo',''))):products,[category])
 return <main className="listing-page"><div className="section-inner"><SectionHeading title={category||'All Products'} subtitle={`${visible.length} products`}/><div className="listing-grid">{visible.map(p=><ProductCard key={p.id} product={p} {...shop}/>)}</div></div></main>
}
