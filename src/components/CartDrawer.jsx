import Icon from './Icon'
import { money } from '../utils/money'
const fallback='/assets/images/no-image.jpg'
export default function CartDrawer({cart,total,removeCart,close}){
  return <div className="drawer-backdrop" onClick={close}><aside className="cart-panel" onClick={e=>e.stopPropagation()}>
    <div className="cart-head"><h2>Your Cart</h2><button onClick={close}><Icon name="close"/></button></div>
    <div className="cart-items">{cart.length===0?<p>Your cart is empty.</p>:cart.map((p,i)=><div className="cart-item" key={`${p.id}-${i}`}>
      <img src={p.image} onError={e=>e.currentTarget.src=fallback} alt=""/><div><h4>{p.title}</h4><span>{money(p.price)}</span></div><button onClick={()=>removeCart(i)}>×</button>
    </div>)}</div>
    <div className="cart-total"><span>Total</span><strong>{money(total)}</strong></div><button className="checkout-btn">Checkout</button>
  </aside></div>
}
