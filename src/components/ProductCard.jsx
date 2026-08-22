import Icon from './Icon'
import { money } from '../utils/money'
const fallback='/assets/images/no-image.jpg'
export default function ProductCard({product,onAdd,liked,toggleWish}){
 return <article className="product-card-ui">
  <div className="card-media"><img src={product.image} alt={product.title} onError={e=>e.currentTarget.src=fallback}/>
   {product.discount&&<span className="discount">{product.discount}</span>}
   <button className={`heart-card ${liked?'liked':''}`} onClick={()=>toggleWish?.(product)} aria-label="Add to wishlist"><Icon name="heart" size={16}/></button>
   <div className="quick-actions"><button onClick={()=>onAdd?.(product)}>Add to bag</button></div>
  </div>
  <div className="card-text"><span className="card-category">{product.category}</span><h3>{product.title}</h3><div className="price-line"><strong>{money(product.price)}</strong><del>{money(product.oldPrice)}</del></div></div>
 </article>
}
