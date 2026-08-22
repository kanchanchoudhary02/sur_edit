import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import SectionHeading from '../components/SectionHeading'
import { products } from '../data/products'
export default function SearchPage({shop}){const [params]=useSearchParams();const q=(params.get('q')||'').toLowerCase();const results=products.filter(p=>p.title.toLowerCase().includes(q)||p.category.toLowerCase().includes(q));return <main className="listing-page"><div className="section-inner"><SectionHeading title={`Search results for “${q}”`} subtitle={`${results.length} products found`}/><div className="listing-grid">{results.map(p=><ProductCard key={p.id} product={p} {...shop}/>)}</div>{!results.length&&<p className="empty-state">No products found.</p>}</div></main>}
