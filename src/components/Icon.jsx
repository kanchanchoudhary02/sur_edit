export default function Icon({ name, size = 19 }) {
  const common = { width:size, height:size, viewBox:'0 0 24 24', fill:'none', stroke:'currentColor', strokeWidth:'1.65', strokeLinecap:'round', strokeLinejoin:'round' }
  const paths = {
    search:<><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></>,
    user:<><circle cx="12" cy="8" r="3.2"/><path d="M5.5 20c.8-3.5 3-5.2 6.5-5.2s5.7 1.7 6.5 5.2"/></>,
    heart:<path d="M20.8 8.9c0 5-8.8 10.3-8.8 10.3S3.2 13.9 3.2 8.9A4.7 4.7 0 0 1 12 6.1a4.7 4.7 0 0 1 8.8 2.8Z"/>,
    bag:<><path d="M5 8.5h14l-1 12H6l-1-12Z"/><path d="M8.5 9V6.8a3.5 3.5 0 0 1 7 0V9"/></>,
    chevron:<path d="m7 9 5 5 5-5"/>,
    arrow:<path d="M5 12h14M13 6l6 6-6 6"/>,
    close:<><path d="M6 6l12 12M18 6 6 18"/></>,
    menu:<><path d="M4 7h16M4 12h16M4 17h16"/></>,
    instagram:<><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.5"/><circle cx="17.2" cy="6.8" r=".7" fill="currentColor" stroke="none"/></>
  }
  return <svg {...common}>{paths[name]}</svg>
}
