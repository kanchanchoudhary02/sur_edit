import ProductCard from '../components/ProductCard'
import SectionHeading from '../components/SectionHeading'
export default function WishlistPage({shop}){return <main className="listing-page"><div className="section-inner"><SectionHeading title="My Wishlist" subtitle={`${shop.wishlist.length} saved products`}/>{shop.wishlist.length?<div className="listing-grid">{shop.wishlist.map(p=><ProductCard key={p.id} product={p} onAdd={shop.addToCart} liked toggleWish={shop.toggleWish}/>)}</div>:<p className="empty-state">Your wishlist is empty.</p>}</div></main>}
