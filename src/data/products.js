const product = (id,title,price,oldPrice,category,image,discount='') =>
  ({ id,title,price,oldPrice,category,discount,image })

const img = name => `/assets/store/products/${name}`

export const products = [
  product('p1','Handcrafted Floral Cotton Kurta Set',1899,2499,'Womenwear',img('IMG-20251007-WA0004.jpg'),'-24%'),
  product('p2','Jaipur Print Yellow Kurta Set',1799,2399,'Womenwear',img('IMG-20251007-WA0003.jpg'),'-25%'),
  product('p3','Indigo Block Print Couple Set',2499,3299,'Womenwear',img('couple1.jpg'),'-24%'),
  product('p4','Pink Floral Co-ord Set',1999,2799,'Womenwear',img('IMG-20251106-WA0050.jpg'),'-29%'),
  product('p5','Classic Handblock Print Saree',2199,2999,'Sarees',img('saree3.jpg'),'-27%'),
  product('p6','Elegant Festive Saree',2399,3199,'Sarees',img('saree2.jpg'),'-25%'),
  product('p7','Teal Printed Kurta Set',1899,2599,'Womenwear',img('kurta1.jpg'),'-27%'),
  product('p8','Women’s Printed Skirt Set',1699,2299,'Womenwear',img('womenskirt.jpg'),'-26%'),
  product('p9','Classic Men’s Printed Kurta',1599,2199,'Menwear',img('menshirt2.jpg'),'-27%'),
  product('p10','Indigo Men’s Kurta Set',1899,2499,'Menwear',img('menset.jpg'),'-24%'),
  product('p11','Printed Men’s Shirt',1499,1999,'Menwear',img('menshirt.jpg'),'-25%'),
  product('p12','Handcrafted Men’s Jacket',2299,2999,'Menwear',img('mensjacket.jpg'),'-23%'),
  product('p13','Yellow Floral Women’s Set',1799,2499,'New Arrivals',img('kids4.jpg'),'-28%'),
  product('p14','Blue Printed Couple Look',2499,3299,'New Arrivals',img('couple8.jpg'),'-24%'),
  product('p15','Contemporary Printed Tunic',1599,2199,'Womenwear',img('tunic.jpg'),'-27%'),
  product('p16','Printed Palazzo Set',1799,2399,'Womenwear',img('womenpalazzo.jpg'),'-25%'),
  product('p17','Rust Floral Kurta',1699,2299,'New Arrivals',img('IMG-20251106-WA0031.jpg'),'-26%'),
  product('p18','Blue Floral Everyday Set',1799,2399,'Womenwear',img('IMG-20251106-WA0079.jpg'),'-25%'),
  product('p19','Handcrafted Green Kurta',1699,2299,'Womenwear',img('IMG-20251106-WA0073.jpg'),'-26%'),
  product('p20','Printed Family Festive Edit',2699,3499,'New Arrivals',img('couple10.jpg'),'-23%'),
  product('p21','Statement Printed Dress',1899,2599,'Womenwear',img('IMG-20251105-WA0011.jpg'),'-27%'),
  product('p22','Blue & White Men’s Set',1999,2699,'Menwear',img('IMG-20251106-WA0089.jpg'),'-26%'),
  product('p23','Heritage Floral Dress',1899,2599,'Womenwear',img('IMG-20251106-WA0014.jpg'),'-27%'),
  product('p24','Festive Pink Printed Set',1999,2799,'New Arrivals',img('IMG-20251106-WA0076.jpg'),'-29%'),
  product('p25','Everyday Accessories Edit',899,1299,'Accessories',`/assets/store/categories/accessories.jpg`,'-31%'),
  product('p26','Minimal Gold-Tone Jewelry Edit',999,1499,'Jewelry',`/assets/store/categories/jewelry.jpg`,'-33%'),
  product('p27','New Season Home Edit',1299,1799,'Home Decor',`/assets/store/categories/homedecor.jpg`,'-28%')
]

