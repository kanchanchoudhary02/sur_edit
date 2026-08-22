import SectionHeading from './SectionHeading'
import ProductCard from './ProductCard'
import { useNavigate } from 'react-router-dom'
import Icon from './Icon'
const root='/assets/store/'
const fallback='/assets/images/no-image.jpg'

export function Intro(){return <section className="intro"><div className="content-narrow">
  <span className="section-kicker">ROOTED IN INDIA · DESIGNED FOR NOW</span>
  <h1>Where Indian craft meets everyday style.</h1>
  <p>Sur-Earth brings together expressive prints, relaxed silhouettes and thoughtful craftsmanship. From everyday kurtas to festive sarees and easy menswear, every piece is designed to feel personal, effortless and beautifully Indian.</p>
</div></section>}

export function CategoryTiles(){
 const navigate=useNavigate()
 const cats=[
  ['Womenwear','/categories/womenwear.jpg','Explore everyday silhouettes'],
  ['Menwear','/categories/menwear.jpg','Modern classics'],
  ['Sarees','/categories/sarees.jpg','Heritage drapes'],
  ['Accessories','/categories/accessories.jpg','The finishing touch'],
  ['Jewelry','/categories/jewelry.jpg','Quiet statement pieces']
 ]
 return <section className="category-section"><div className="section-inner"><SectionHeading title="SHOP BY MOOD" subtitle="Curated edits for every version of you."/>
  <div className="category-grid">{cats.map(([name,img,sub])=><button className="category-card" key={name} onClick={()=>navigate(`/shop?category=${name}`)}>
    <img src={root+img} alt={name}/><div className="category-shade"/><div className="category-copy"><span>{sub}</span><h3>{name}</h3><b>Explore ↗</b></div>
  </button>)}</div>
 </div></section>
}

export function ProductShowcase({title,subtitle,items,onAdd,wishlist,toggleWish}){return <section className="showcase"><div className="section-inner"><SectionHeading title={title} subtitle={subtitle}/><div className="product-row">{items.map((p,i)=><ProductCard key={p.id+i} product={p} onAdd={onAdd} liked={wishlist?.some(x=>x.id===p.id)} toggleWish={toggleWish}/>)}</div><button className="view-all" onClick={()=>window.location.href='/shop'}>View all pieces <span>→</span></button></div></section>}

export function StoryBanner(){const navigate=useNavigate();return <section className="story-banner"><div className="story-image story-video"><video autoPlay muted loop playsInline preload="metadata" poster="/assets/videos/posters/factory.jpg" aria-label="Traditional textile weaving"><source src="/assets/videos/factory.mp4" type="video/mp4"/></video><div className="story-video-label">CRAFT IN MOTION</div></div><div className="story-copy"><span className="section-kicker">THE SUR-EARTH NOTE</span><h2>Wear the craft.<br/><em>Keep the story.</em></h2><p>From the loom to the final look, every detail carries a sense of place. Discover colour, texture and craft made for a modern wardrobe.</p><button onClick={()=>navigate('/shop?category=New%20Arrivals')}>Discover new arrivals <Icon name="arrow" size={16}/></button></div></section>}

export function MotionEdit(){const navigate=useNavigate();const videos=[['roof.mp4','roof.jpg','HERITAGE DRAPES','Colourful stories, seen from a new angle.','Sarees'],['child.mp4','child.jpg','LITTLE FESTIVE','Joyful Indian dressing for every little celebration.','Kids'],['boy.mp4','boy.jpg','MODERN MENSWEAR','Print-led layers with a distinctly Indian soul.','Menwear']];return <section className="motion-edit"><div className="section-inner"><SectionHeading title="THE STORY IN MOTION" subtitle="See the craft, colour and people behind the Sur-Earth mood."/><div className="motion-grid">{videos.map(([video,poster,kicker,title,category])=><article className="motion-card" key={video}><video autoPlay muted loop playsInline preload="metadata" poster={`/assets/videos/posters/${poster}`}><source src={`/assets/videos/${video}`} type="video/mp4"/></video><div className="motion-shade"/><div className="motion-copy"><span>{kicker}</span><h3>{title}</h3><button onClick={()=>navigate(`/shop?category=${encodeURIComponent(category)}`)}>Explore <b>↗</b></button></div></article>)}</div></div></section>}

export function BestSellers({items,onAdd,wishlist,toggleWish}){return <section className="best-section"><div className="section-inner"><SectionHeading title="MOST LOVED" subtitle="Pieces our edit keeps coming back to."/><div className="best-grid">{items.map(p=><ProductCard key={p.id} product={p} onAdd={onAdd||(()=>{})} liked={wishlist?.some(x=>x.id===p.id)} toggleWish={toggleWish||(()=>{})}/>)}</div></div></section>}

export function Instagram(){const imgs=['couple5.jpg','IMG-20251106-WA0050.jpg','IMG-20251007-WA0019.jpg','couple8.jpg','saree3.jpg','womenskirt.jpg'];return <section className="instagram"><div className="section-inner"><SectionHeading title="FROM OUR WORLD" subtitle="A little colour, a little craft, a lot of Sur-Earth."/><div className="insta-grid">{imgs.map((x,i)=><div key={i}><img src={root+'products/'+x} alt="Sur-Earth style"/></div>)}</div></div></section>}

export function Testimonials(){const data=[
 ['Aarohi Mehta','“The prints are beautiful in person — the colours feel rich, and the fabric is so easy to wear.”'],
 ['Riya Sharma','“My order looked exactly like the pictures. The styling is effortless and the finishing is lovely.”'],
 ['Kabir Jain','“Finally, Indian-inspired menswear that feels modern without losing its character.”']
];return <section className="testimonials"><div className="section-inner"><SectionHeading title="LOVED BY OUR COMMUNITY" subtitle="Real words from people who wear the story."/><div className="testimonial-grid">{data.map(([name,text])=><article className="testimonial-card" key={name}><div className="quote-mark">“</div><div className="stars">★★★★★</div><p>{text}</p><b>{name} <small>Verified Customer</small></b></article>)}</div></div></section>}

export function InfoColumns(){return <section className="info-columns"><div><span>01</span><h3>CRAFT-LED</h3><p>Thoughtful silhouettes inspired by Indian textiles, prints and everyday traditions.</p></div><div><span>02</span><h3>EASY DELIVERY</h3><p>Free shipping on orders above ₹999 with secure, reliable checkout.</p></div><div><span>03</span><h3>HUMAN SUPPORT</h3><p>Need a size, styling or order update? Our team is always happy to help.</p></div></section>}
