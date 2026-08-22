import { useEffect,useState } from 'react'
import Hero from '../components/Hero'
import { Intro,CategoryTiles,ProductShowcase,StoryBanner,MotionEdit,BestSellers,Instagram,Testimonials,InfoColumns } from '../components/HomeSections'
import { products } from '../data/products'

export default function HomePage({shop}){
 const [activeHero,setActiveHero]=useState(0)
 useEffect(()=>{const t=setInterval(()=>setActiveHero(v=>(v+1)%3),6500);return()=>clearInterval(t)},[])
 return <main>
   <Hero active={activeHero}/>
   <Intro/>
   <CategoryTiles/>
   <ProductShowcase title="THE NEW EDIT" subtitle="Fresh prints and easy silhouettes for the season" items={products.slice(0,8)} {...shop}/>
   <StoryBanner/>
   <MotionEdit/>
   <ProductShowcase title="EVERYDAY ELEGANCE" subtitle="Craft-led styles made to move with you" items={products.slice(8,16)} {...shop}/>
   <BestSellers items={products.slice(4,12)} {...shop}/>
   <Instagram/>
   <Testimonials/>
   <InfoColumns/>
 </main>
}
