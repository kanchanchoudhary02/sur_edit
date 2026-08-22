import { useNavigate } from 'react-router-dom'

export default function Hero({active}){
  const navigate=useNavigate()
  const slides=[
    {video:'/assets/videos/reddress.mp4',poster:'/assets/videos/posters/reddress.jpg',eyebrow:'THE NEW SEASON',title:'Tradition, in a new light',text:'Rich colour, heirloom-inspired embroidery and silhouettes made for today.',button:'Shop Womenwear',path:'/shop?category=Womenwear'},
    {video:'/assets/videos/girlsreview.mp4',poster:'/assets/videos/posters/girlsreview.jpg',eyebrow:'THE SUR-EARTH EDIT',title:'Wear the story',text:'Indian craft, expressive prints and modern ease — made to be lived in.',button:'Explore the Edit',path:'/shop'},
    {video:'/assets/videos/girlscollection.mp4',poster:'/assets/videos/posters/girlscollection.jpg',eyebrow:'CRAFTED IN COLOUR',title:'Pieces with a point of view',text:'From statement bags to festive layers, discover colour that feels unmistakably yours.',button:'Shop New Arrivals',path:'/shop?category=New%20Arrivals'}
  ]
  return <section className="hero">
    {slides.map((s,i)=><div key={s.video} className={`hero-slide ${i===active?'show':''}`}>
      <video className="hero-video" autoPlay muted loop playsInline preload="metadata" poster={s.poster} aria-hidden="true">
        <source src={s.video} type="video/mp4" />
      </video>
      <div className="hero-overlay"/>
      <div className="hero-content">
        <span className="hero-eyebrow">{s.eyebrow}</span><h1>{s.title}</h1><p>{s.text}</p>
        <button onClick={()=>navigate(s.path)}>{s.button}<span>↗</span></button>
      </div>
    </div>)}
    <div className="hero-dots">{slides.map((_,i)=><span key={i} className={i===active?'active':''}/>)}</div>
    <div className="hero-scroll">SCROLL TO EXPLORE <span>↓</span></div>
  </section>
}
