import { useNavigate } from 'react-router-dom'
export default function Footer(){
 const navigate=useNavigate()
 return <footer className="footer-ui">
  <div className="footer-news"><div><span className="section-kicker">STAY IN THE LOOP</span><h2>Notes on new drops, craft & colour.</h2></div><form onSubmit={e=>e.preventDefault()}><input type="email" placeholder="Your email address"/><button>Join the list ↗</button></form></div>
  <div className="footer-inner">
   <div className="footer-brand"><img src="/assets/store/logos/main.png" alt="Sur-Earth"/><p>Indian craft, reimagined for modern living. Thoughtful prints, expressive colour and easy silhouettes.</p><div className="socials"><span>ig</span><span>fb</span><span>yt</span></div></div>
   <div><h4>Shop</h4><a onClick={()=>navigate('/shop?category=Womenwear')}>Womenwear</a><a onClick={()=>navigate('/shop?category=Menwear')}>Menwear</a><a onClick={()=>navigate('/shop?category=Sarees')}>Sarees</a><a onClick={()=>navigate('/shop?category=New%20Arrivals')}>New Arrivals</a></div>
   <div><h4>Explore</h4><a>Our Story</a><a>Craft Journal</a><a>Size Guide</a><a>Shipping & Returns</a></div>
   <div><h4>Get in touch</h4><p>Yerwada, Pune, India</p><p>+91 74472 69472</p><p>sale@sur-earth.com</p><button className="footer-contact" onClick={()=>navigate('/contact-us')}>Contact us ↗</button></div>
  </div>
  <div className="footer-bottom"><span>© 2026 Sur-Earth. All rights reserved.</span><div><a>Privacy</a><a>Terms</a><a>Shipping</a><a>Returns</a></div></div>
 </footer>
}
