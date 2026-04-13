/* ═════════════════════════════════════════════
   RD SOFA MAKER – Main Application JavaScript
   ═════════════════════════════════════════════ */

// ── Product Data ──
const PRODUCTS = [
  {
    id: 1,
    name: "Royal L-Shape Sofa",
    category: "L Shape Sofa",
    price: 28999,
    originalPrice: 42999,
    image: "images/sofa-l-shape.png",
    description: "Premium L-shaped sofa with high-density foam cushions and solid wood frame. Perfect for spacious living rooms.",
    material: "Fabric",
    size: "Large",
    badge: "Bestseller",
    rating: 4.8,
    reviews: 124
  },
  {
    id: 2,
    name: "Comfort Recliner Pro",
    category: "Recliner Sofa",
    price: 34999,
    originalPrice: 49999,
    image: "images/sofa-recliner.png",
    description: "Luxurious recliner with adjustable headrest and footrest. Ultra-comfortable for movie nights and relaxation.",
    material: "Leather",
    size: "Medium",
    badge: "Premium",
    rating: 4.9,
    reviews: 89
  },
  {
    id: 3,
    name: "Heritage Wooden Sofa",
    category: "Wooden Sofa",
    price: 22999,
    originalPrice: 32999,
    image: "images/sofa-wooden.png",
    description: "Elegant teak wood sofa with hand-carved details and premium cushions. Timeless design for traditional homes.",
    material: "Wood",
    size: "Medium",
    badge: "New",
    rating: 4.7,
    reviews: 67
  },
  {
    id: 4,
    name: "Cloud Soft Fabric Sofa",
    category: "Fabric Sofa",
    price: 18999,
    originalPrice: 27999,
    image: "images/sofa-fabric.png",
    description: "Ultra-soft fabric 3-seater with removable washable covers. Available in multiple color options.",
    material: "Fabric",
    size: "Medium",
    badge: "Popular",
    rating: 4.6,
    reviews: 156
  },
  {
    id: 5,
    name: "Executive Leather Sofa",
    category: "Leather Sofa",
    price: 45999,
    originalPrice: 62999,
    image: "images/sofa-leather.png",
    description: "Premium Italian-style leather sofa with chrome legs. Sophisticated design for modern offices and living rooms.",
    material: "Leather",
    size: "Large",
    badge: "Luxury",
    rating: 4.9,
    reviews: 43
  },
  {
    id: 6,
    name: "Bespoke Designer Sofa",
    category: "Custom Made Sofa",
    price: 35999,
    originalPrice: 52999,
    image: "images/sofa-custom.png",
    description: "Fully customizable sofa – choose your fabric, color, size, and style. Made to order in 15-20 days.",
    material: "Fabric",
    size: "Custom",
    badge: "Custom",
    rating: 5.0,
    reviews: 38
  },
  {
    id: 7,
    name: "Compact L-Shape Mini",
    category: "L Shape Sofa",
    price: 19999,
    originalPrice: 28999,
    image: "images/sofa-l-shape.png",
    description: "Space-saving L-shape design perfect for apartments. High-quality fabric with sturdy frame.",
    material: "Fabric",
    size: "Small",
    badge: "Value",
    rating: 4.5,
    reviews: 92
  },
  {
    id: 8,
    name: "Dual Recliner Loveseat",
    category: "Recliner Sofa",
    price: 42999,
    originalPrice: 59999,
    image: "images/sofa-recliner.png",
    description: "Double recliner with cup holders and storage. Perfect for couples. Premium leatherette upholstery.",
    material: "Leatherette",
    size: "Medium",
    badge: "Hot Deal",
    rating: 4.8,
    reviews: 71
  },
  {
    id: 9,
    name: "Rustic Wood Bench Sofa",
    category: "Wooden Sofa",
    price: 16999,
    originalPrice: 24999,
    image: "images/sofa-wooden.png",
    description: "Sheesham wood sofa with rustic finish and comfortable cotton cushions. Durable and stylish.",
    material: "Wood",
    size: "Small",
    badge: null,
    rating: 4.4,
    reviews: 55
  },
  {
    id: 10,
    name: "Velvet Chesterfield",
    category: "Fabric Sofa",
    price: 32999,
    originalPrice: 45999,
    image: "images/sofa-fabric.png",
    description: "Classic Chesterfield design in premium velvet. Deep button tufting with rolled arms. Statement piece.",
    material: "Fabric",
    size: "Large",
    badge: "Trending",
    rating: 4.7,
    reviews: 83
  },
  {
    id: 11,
    name: "Milano Leather 3-Seater",
    category: "Leather Sofa",
    price: 38999,
    originalPrice: 54999,
    image: "images/sofa-leather.png",
    description: "Modern 3-seater in genuine leather with clean lines and minimal design. Extremely durable.",
    material: "Leather",
    size: "Medium",
    badge: null,
    rating: 4.6,
    reviews: 62
  },
  {
    id: 12,
    name: "Family Custom Sectional",
    category: "Custom Made Sofa",
    price: 48999,
    originalPrice: 68999,
    image: "images/sofa-custom.png",
    description: "Large sectional sofa customized for your family. Choose configuration, fabric, and color.",
    material: "Fabric",
    size: "Extra Large",
    badge: "Made to Order",
    rating: 4.9,
    reviews: 29
  },
  {
    id: 13,
    name: "Corner L-Shape Deluxe",
    category: "L Shape Sofa",
    price: 36999,
    originalPrice: 52999,
    image: "images/sofa-l-shape.png",
    description: "Premium corner L-shape with chaise lounge and storage ottoman. Maximum comfort and utility.",
    material: "Fabric",
    size: "Extra Large",
    badge: "Top Rated",
    rating: 4.9,
    reviews: 108
  },
  {
    id: 14,
    name: "Single Power Recliner",
    category: "Recliner Sofa",
    price: 24999,
    originalPrice: 35999,
    image: "images/sofa-recliner.png",
    description: "Motorized single recliner with USB charging port. Perfect for reading nooks and personal spaces.",
    material: "Leatherette",
    size: "Single",
    badge: null,
    rating: 4.5,
    reviews: 47
  },
  {
    id: 15,
    name: "Modern Platform Wooden",
    category: "Wooden Sofa",
    price: 26999,
    originalPrice: 38999,
    image: "images/sofa-wooden.png",
    description: "Contemporary wooden sofa with platform base. Mango wood construction with premium cushions.",
    material: "Wood",
    size: "Medium",
    badge: "New Arrival",
    rating: 4.6,
    reviews: 34
  },
  {
    id: 16,
    name: "Linen Comfort 2-Seater",
    category: "Fabric Sofa",
    price: 14999,
    originalPrice: 21999,
    image: "images/sofa-fabric.png",
    description: "Compact 2-seater in premium linen. Perfect for small apartments and bedrooms. Easy to clean.",
    material: "Fabric",
    size: "Small",
    badge: "Budget Pick",
    rating: 4.3,
    reviews: 198
  },
  {
    id: 17,
    name: "Premium Tan Leather",
    category: "Leather Sofa",
    price: 52999,
    originalPrice: 72999,
    image: "images/sofa-leather.png",
    description: "Full-grain tan leather sofa with vintage appeal. Ages beautifully over time. Handcrafted quality.",
    material: "Leather",
    size: "Large",
    badge: "Exclusive",
    rating: 5.0,
    reviews: 21
  },
  {
    id: 18,
    name: "Studio Custom Daybed",
    category: "Custom Made Sofa",
    price: 22999,
    originalPrice: 32999,
    image: "images/sofa-custom.png",
    description: "Multi-functional custom daybed sofa. Converts from sofa to bed. Choose your own fabric and size.",
    material: "Fabric",
    size: "Medium",
    badge: "Versatile",
    rating: 4.7,
    reviews: 56
  }
];

// ── Category Data ──
const CATEGORIES = [
  { name: "L Shape Sofa", image: "images/sofa-l-shape.png", count: 3 },
  { name: "Recliner Sofa", image: "images/sofa-recliner.png", count: 3 },
  { name: "Wooden Sofa", image: "images/sofa-wooden.png", count: 3 },
  { name: "Fabric Sofa", image: "images/sofa-fabric.png", count: 3 },
  { name: "Leather Sofa", image: "images/sofa-leather.png", count: 3 },
  { name: "Custom Made Sofa", image: "images/sofa-custom.png", count: 3 }
];

// ── Testimonials Data ──
const TESTIMONIALS = [
  {
    name: "Rajesh Kumar",
    location: "Kiwale, Pune",
    text: "Absolutely loved our new L-shape sofa from RD Sofa Maker! The quality of foam and wood is exceptional. Custom size fit perfectly in our living room. Highly recommended!",
    rating: 5,
    initials: "RK"
  },
  {
    name: "Priya Sharma",
    location: "Ravet, Pune",
    text: "We got a custom recliner sofa for our home theater and it exceeded all expectations. The build quality is fantastic and the price was very reasonable compared to showrooms.",
    rating: 5,
    initials: "PS"
  },
  {
    name: "Amit Patel",
    location: "Hinjewadi, Pune",
    text: "Excellent craftsmanship! Ordered a 7-seater wooden sofa set. Delivery was on time and the quality is top-notch. Will definitely order again for our new house.",
    rating: 5,
    initials: "AP"
  },
  {
    name: "Sneha Deshmukh",
    location: "Wakad, Pune",
    text: "Best sofa shop near Kiwale! Got our fabric sofa customized in our favorite color. Very comfortable and durable. The team was very helpful throughout the process.",
    rating: 4,
    initials: "SD"
  },
  {
    name: "Vikram Jadhav",
    location: "Pimpri, Pune",
    text: "Factory direct pricing is genuinely cheaper than any showroom. We saved almost 40% on our leather sofa. Outstanding quality at an unbeatable price!",
    rating: 5,
    initials: "VJ"
  },
  {
    name: "Manisha Kulkarni",
    location: "Chinchwad, Pune",
    text: "The home visit service was amazing! They came to our flat, took measurements, and suggested the perfect sofa design. Delivered within 2 weeks. Very professional!",
    rating: 5,
    initials: "MK"
  }
];

// ═══════════════════════════════════
// CART SYSTEM
// ═══════════════════════════════════
const Cart = {
  KEY: 'rd_sofa_cart',

  getItems() {
    try {
      return JSON.parse(localStorage.getItem(this.KEY)) || [];
    } catch {
      return [];
    }
  },

  saveItems(items) {
    localStorage.setItem(this.KEY, JSON.stringify(items));
    this.updateBadge();
    document.dispatchEvent(new CustomEvent('cartUpdated'));
  },

  addItem(productId, qty = 1) {
    const items = this.getItems();
    const existing = items.find(i => i.id === productId);
    if (existing) {
      existing.qty += qty;
    } else {
      items.push({ id: productId, qty });
    }
    this.saveItems(items);
    showToast('Added to cart!');
  },

  removeItem(productId) {
    const items = this.getItems().filter(i => i.id !== productId);
    this.saveItems(items);
  },

  updateQty(productId, qty) {
    const items = this.getItems();
    const item = items.find(i => i.id === productId);
    if (item) {
      if (qty <= 0) {
        this.removeItem(productId);
        return;
      }
      item.qty = qty;
      this.saveItems(items);
    }
  },

  getTotal() {
    return this.getItems().reduce((sum, item) => {
      const product = PRODUCTS.find(p => p.id === item.id);
      return sum + (product ? product.price * item.qty : 0);
    }, 0);
  },

  getCount() {
    return this.getItems().reduce((sum, item) => sum + item.qty, 0);
  },

  clear() {
    localStorage.removeItem(this.KEY);
    this.updateBadge();
    document.dispatchEvent(new CustomEvent('cartUpdated'));
  },

  updateBadge() {
    const badges = document.querySelectorAll('.cart-count');
    const count = this.getCount();
    badges.forEach(badge => {
      badge.textContent = count;
      badge.setAttribute('data-count', count);
      badge.style.display = count > 0 ? 'flex' : 'none';
    });
  }
};

// ═══════════════════════════════════
// UTILITY FUNCTIONS
// ═══════════════════════════════════
function formatPrice(price) {
  return '₹' + price.toLocaleString('en-IN');
}

function getDiscount(original, current) {
  return Math.round(((original - current) / original) * 100);
}

function showToast(message) {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> ${message}`;
  toast.classList.add('active');
  setTimeout(() => toast.classList.remove('active'), 2500);
}

function openWhatsApp(message) {
  const phone = '919130844058';
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
}

// ═══════════════════════════════════
// SVG ICONS
// ═══════════════════════════════════
const ICONS = {
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>`,
  x: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`,
  cart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`,
  phone: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  whatsapp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`,
  star: `<svg viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
  heart: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
  arrowUp: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>`,
  search: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  filter: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,
  mapPin: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  truck: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>`,
  shield: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
  award: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
  tool: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
  dollar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  eye: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  zoomIn: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>`,
  chevronLeft: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevronRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`,
  minus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
  trash: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>`,
  shoppingBag: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
  facebook: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`
};

// ═══════════════════════════════════
// RENDER FUNCTIONS
// ═══════════════════════════════════

function renderProductCard(product) {
  const discount = getDiscount(product.originalPrice, product.price);
  return `
    <div class="product-card" data-id="${product.id}" data-category="${product.category}" data-material="${product.material}" data-size="${product.size}" data-price="${product.price}">
      <div class="product-card-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
        <div class="product-wishlist" onclick="event.stopPropagation()">${ICONS.heart}</div>
      </div>
      <div class="product-card-body">
        <span class="product-category">${product.category}</span>
        <h3>${product.name}</h3>
        <p class="description">${product.description}</p>
        <div class="product-price">
          <span class="current">${formatPrice(product.price)}</span>
          <span class="original">${formatPrice(product.originalPrice)}</span>
          <span class="discount">${discount}% OFF</span>
        </div>
        <div class="product-card-actions">
          <button class="btn btn-outline btn-sm" onclick="event.stopPropagation(); openProductModal(${product.id})">
            ${ICONS.eye} View
          </button>
          <button class="btn btn-primary btn-sm" onclick="event.stopPropagation(); Cart.addItem(${product.id})">
            ${ICONS.cart} Add to Cart
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderCategoryCard(category) {
  return `
    <a href="products.html?category=${encodeURIComponent(category.name)}" class="category-card">
      <img src="${category.image}" alt="${category.name}" loading="lazy">
      <div class="overlay">
        <h3>${category.name}</h3>
      </div>
      <div class="arrow">${ICONS.arrowRight}</div>
    </a>
  `;
}

function renderTestimonialCard(testimonial) {
  return `
    <div class="testimonial-card">
      <div class="testimonial-stars">
        ${'<span>' + ICONS.star + '</span>'.repeat(testimonial.rating)}
      </div>
      <p class="testimonial-text">"${testimonial.text}"</p>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${testimonial.initials}</div>
        <div class="testimonial-info">
          <h4>${testimonial.name}</h4>
          <p>${testimonial.location}</p>
        </div>
      </div>
    </div>
  `;
}

// ═══════════════════════════════════
// PRODUCT MODAL
// ═══════════════════════════════════
function openProductModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const discount = getDiscount(product.originalPrice, product.price);
  
  let modal = document.getElementById('productModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'productModal';
    modal.className = 'product-modal';
    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="product-modal-content" style="position: relative;">
      <button class="modal-close" onclick="closeProductModal()">${ICONS.x}</button>
      <div class="modal-image">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="modal-body">
        <span class="product-category">${product.category}</span>
        <h2 style="margin: 0.5rem 0; font-size: 1.5rem;">${product.name}</h2>
        <div class="product-price" style="margin: 1rem 0;">
          <span class="current" style="font-size: 1.5rem;">${formatPrice(product.price)}</span>
          <span class="original">${formatPrice(product.originalPrice)}</span>
          <span class="discount">${discount}% OFF</span>
        </div>
        <p style="margin-bottom: 1rem; line-height: 1.7;">${product.description}</p>
        <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem;">
          <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--gray-100);">
            <span style="color: var(--gray-500);">Material</span>
            <span style="font-weight: 600;">${product.material}</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--gray-100);">
            <span style="color: var(--gray-500);">Size</span>
            <span style="font-weight: 600;">${product.size}</span>
          </div>
          <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--gray-100);">
            <span style="color: var(--gray-500);">Rating</span>
            <span style="font-weight: 600;">⭐ ${product.rating} (${product.reviews} reviews)</span>
          </div>
        </div>
        <div class="btn-group" style="flex-direction: column;">
          <button class="btn btn-primary btn-block" onclick="Cart.addItem(${product.id}); closeProductModal();">
            ${ICONS.cart} Add to Cart
          </button>
          <button class="btn btn-whatsapp btn-block" onclick="openWhatsApp('Hi! I am interested in ${product.name} (${formatPrice(product.price)}). Please share more details.')">
            ${ICONS.whatsapp} Book on WhatsApp
          </button>
        </div>
      </div>
    </div>
  `;

  requestAnimationFrame(() => modal.classList.add('active'));
  document.body.style.overflow = 'hidden';
  
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeProductModal();
  });
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ═══════════════════════════════════
// CART SIDEBAR
// ═══════════════════════════════════
function renderCartSidebar() {
  let sidebar = document.getElementById('cartSidebar');
  let overlay = document.getElementById('cartOverlay');
  
  if (!sidebar) {
    overlay = document.createElement('div');
    overlay.id = 'cartOverlay';
    overlay.className = 'cart-overlay';
    overlay.onclick = closeCartSidebar;
    document.body.appendChild(overlay);

    sidebar = document.createElement('div');
    sidebar.id = 'cartSidebar';
    sidebar.className = 'cart-sidebar';
    document.body.appendChild(sidebar);
  }

  const items = Cart.getItems();
  const total = Cart.getTotal();

  if (items.length === 0) {
    sidebar.innerHTML = `
      <div class="cart-header">
        <h3>Your Cart</h3>
        <div class="cart-close" onclick="closeCartSidebar()">${ICONS.x}</div>
      </div>
      <div class="cart-empty">
        ${ICONS.shoppingBag}
        <h3>Your cart is empty</h3>
        <p>Add some amazing sofas to get started!</p>
        <a href="products.html" class="btn btn-primary" style="margin-top: 1rem;">Browse Products</a>
      </div>
    `;
  } else {
    sidebar.innerHTML = `
      <div class="cart-header">
        <h3>Your Cart (${Cart.getCount()})</h3>
        <div class="cart-close" onclick="closeCartSidebar()">${ICONS.x}</div>
      </div>
      <div class="cart-items">
        ${items.map(item => {
          const product = PRODUCTS.find(p => p.id === item.id);
          if (!product) return '';
          return `
            <div class="cart-item">
              <div class="cart-item-image">
                <img src="${product.image}" alt="${product.name}">
              </div>
              <div class="cart-item-details">
                <h4>${product.name}</h4>
                <p class="price">${formatPrice(product.price)}</p>
                <div class="cart-qty">
                  <button onclick="Cart.updateQty(${product.id}, ${item.qty - 1}); renderCartSidebar();">${ICONS.minus}</button>
                  <span>${item.qty}</span>
                  <button onclick="Cart.updateQty(${product.id}, ${item.qty + 1}); renderCartSidebar();">${ICONS.plus}</button>
                </div>
              </div>
              <div class="cart-remove" onclick="Cart.removeItem(${product.id}); renderCartSidebar();">${ICONS.trash}</div>
            </div>
          `;
        }).join('')}
      </div>
      <div class="cart-footer">
        <div class="cart-total">
          <h4>Subtotal</h4>
          <span class="total-price">${formatPrice(total)}</span>
        </div>
        <a href="cart.html" class="btn btn-primary btn-block" style="margin-bottom: 0.5rem;">View Full Cart</a>
        <a href="checkout.html" class="btn btn-secondary btn-block">Checkout</a>
      </div>
    `;
  }
}

function openCartSidebar() {
  renderCartSidebar();
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  if (sidebar) sidebar.classList.add('active');
  if (overlay) overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeCartSidebar() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  if (sidebar) sidebar.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ═══════════════════════════════════
// TESTIMONIALS CAROUSEL
// ═══════════════════════════════════
function initTestimonialCarousel() {
  const wrapper = document.querySelector('.testimonials-wrapper');
  const track = document.querySelector('.testimonials-track');
  const dotsContainer = document.querySelector('.testimonial-dots');
  if (!wrapper || !track) return;

  let currentIndex = 0;
  let startX = 0;
  let endX = 0;

  function getSlideCount() {
    if (window.innerWidth >= 992) return 3;
    if (window.innerWidth >= 768) return 2;
    return 1;
  }

  function getMaxIndex() {
    return Math.max(0, TESTIMONIALS.length - getSlideCount());
  }

  function updateCarousel() {
    const slideWidth = wrapper.offsetWidth / getSlideCount();
    const gap = window.innerWidth >= 768 ? 24 : 16;
    track.style.transform = `translateX(-${currentIndex * (slideWidth + gap)}px)`;
    
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.testimonial-dot');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }
  }

  // Build dots
  if (dotsContainer) {
    for (let i = 0; i <= getMaxIndex(); i++) {
      const dot = document.createElement('div');
      dot.className = `testimonial-dot ${i === 0 ? 'active' : ''}`;
      dot.onclick = () => { currentIndex = i; updateCarousel(); };
      dotsContainer.appendChild(dot);
    }
  }

  // Touch events
  wrapper.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; }, { passive: true });
  wrapper.addEventListener('touchend', (e) => {
    endX = e.changedTouches[0].clientX;
    const diff = startX - endX;
    if (Math.abs(diff) > 50) {
      if (diff > 0 && currentIndex < getMaxIndex()) currentIndex++;
      else if (diff < 0 && currentIndex > 0) currentIndex--;
      updateCarousel();
    }
  }, { passive: true });

  // Auto-play
  let autoPlay = setInterval(() => {
    currentIndex = currentIndex < getMaxIndex() ? currentIndex + 1 : 0;
    updateCarousel();
  }, 5000);

  wrapper.addEventListener('mouseenter', () => clearInterval(autoPlay));
  wrapper.addEventListener('mouseleave', () => {
    autoPlay = setInterval(() => {
      currentIndex = currentIndex < getMaxIndex() ? currentIndex + 1 : 0;
      updateCarousel();
    }, 5000);
  });

  window.addEventListener('resize', () => {
    if (currentIndex > getMaxIndex()) currentIndex = getMaxIndex();
    updateCarousel();
  });

  updateCarousel();
}

// ═══════════════════════════════════
// GALLERY LIGHTBOX
// ═══════════════════════════════════
function initGallery() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  if (!galleryItems.length) return;

  let lightbox = document.getElementById('lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
      <button class="lightbox-close" onclick="closeLightbox()">${ICONS.x}</button>
      <button class="lightbox-nav lightbox-prev" onclick="navigateLightbox(-1)">${ICONS.chevronLeft}</button>
      <img src="" alt="Gallery Image">
      <button class="lightbox-nav lightbox-next" onclick="navigateLightbox(1)">${ICONS.chevronRight}</button>
    `;
    document.body.appendChild(lightbox);
  }

  let currentGalleryIndex = 0;
  const images = Array.from(galleryItems).map(item => item.querySelector('img').src);

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      currentGalleryIndex = index;
      const img = lightbox.querySelector('img');
      img.src = images[currentGalleryIndex];
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  window.navigateLightbox = (direction) => {
    currentGalleryIndex = (currentGalleryIndex + direction + images.length) % images.length;
    const img = lightbox.querySelector('img');
    img.src = images[currentGalleryIndex];
  };

  window.closeLightbox = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') navigateLightbox(-1);
    if (e.key === 'ArrowRight') navigateLightbox(1);
  });
}

// ═══════════════════════════════════
// BOOKING FORM
// ═══════════════════════════════════
function initBookingForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const name = formData.get('fullName');
    const phone = formData.get('phone');
    const sofaType = formData.get('sofaType');
    const budget = formData.get('budget');
    const visitDate = formData.get('visitDate');
    const address = formData.get('address');
    const message = formData.get('message');

    const whatsappMsg = `🛋️ *New Booking Request - RD SOFA MAKER*\n\n` +
      `👤 *Name:* ${name}\n` +
      `📞 *Phone:* ${phone}\n` +
      `🛋️ *Sofa Type:* ${sofaType}\n` +
      `💰 *Budget:* ${budget}\n` +
      `📅 *Visit Date:* ${visitDate}\n` +
      `📍 *Address:* ${address}\n` +
      `💬 *Message:* ${message || 'N/A'}`;

    showSuccessPopup('Booking Submitted!', 'Your booking request has been received. We will contact you shortly.', () => {
      openWhatsApp(whatsappMsg);
    });

    form.reset();
  });
}

// ═══════════════════════════════════
// SUCCESS POPUP
// ═══════════════════════════════════
function showSuccessPopup(title, message, callback) {
  let popup = document.getElementById('successPopup');
  if (!popup) {
    popup = document.createElement('div');
    popup.id = 'successPopup';
    popup.className = 'success-popup';
    document.body.appendChild(popup);
  }

  popup.innerHTML = `
    <div class="success-popup-content">
      <div class="success-icon">${ICONS.check}</div>
      <h3>${title}</h3>
      <p>${message}</p>
      <button class="btn btn-primary" onclick="closeSuccessPopup(${callback ? 'true' : 'false'})">OK</button>
    </div>
  `;

  window._successCallback = callback;
  requestAnimationFrame(() => popup.classList.add('active'));
  document.body.style.overflow = 'hidden';
}

function closeSuccessPopup(runCallback) {
  const popup = document.getElementById('successPopup');
  if (popup) {
    popup.classList.remove('active');
    document.body.style.overflow = '';
  }
  if (runCallback && window._successCallback) {
    window._successCallback();
  }
}

// ═══════════════════════════════════
// NAVIGATION
// ═══════════════════════════════════
function initNavigation() {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Close on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  }

  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    });
  }

  // Active link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ═══════════════════════════════════
// SCROLL ANIMATIONS
// ═══════════════════════════════════
function initScrollAnimations() {
  const elements = document.querySelectorAll('[data-animate]');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => observer.observe(el));
}

// ═══════════════════════════════════
// SCROLL TO TOP
// ═══════════════════════════════════
function initScrollToTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 400);
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ═══════════════════════════════════
// PRODUCTS PAGE FILTERS
// ═══════════════════════════════════
function initProductFilters() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  // Get category from URL
  const params = new URLSearchParams(window.location.search);
  const urlCategory = params.get('category');

  let activeFilters = {
    category: urlCategory ? [urlCategory] : [],
    material: [],
    size: [],
    priceMax: 100000
  };

  function renderProducts() {
    let filtered = PRODUCTS.filter(p => {
      if (activeFilters.category.length && !activeFilters.category.includes(p.category)) return false;
      if (activeFilters.material.length && !activeFilters.material.includes(p.material)) return false;
      if (activeFilters.size.length && !activeFilters.size.includes(p.size)) return false;
      if (p.price > activeFilters.priceMax) return false;
      return true;
    });

    const countEl = document.getElementById('productCount');
    if (countEl) countEl.textContent = `${filtered.length} products`;

    grid.innerHTML = filtered.length ? 
      filtered.map(renderProductCard).join('') :
      '<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--gray-400);"><h3>No products found</h3><p>Try adjusting your filters</p></div>';
  }

  // Set up filter checkboxes
  document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(input => {
    // Pre-check URL category filter
    if (urlCategory && input.value === urlCategory) {
      input.checked = true;
    }
    
    input.addEventListener('change', () => {
      const filterType = input.dataset.filter;
      const value = input.value;
      if (input.checked) {
        activeFilters[filterType].push(value);
      } else {
        activeFilters[filterType] = activeFilters[filterType].filter(v => v !== value);
      }
      renderProducts();
    });
  });

  // Price range
  const priceRange = document.getElementById('priceRange');
  const priceValue = document.getElementById('priceValue');
  if (priceRange) {
    priceRange.addEventListener('input', () => {
      activeFilters.priceMax = parseInt(priceRange.value);
      if (priceValue) priceValue.textContent = formatPrice(activeFilters.priceMax);
      renderProducts();
    });
  }

  // Filter bottom sheet toggle
  const filterToggle = document.querySelector('.filter-toggle-btn');
  const filterSheet = document.querySelector('.filter-bottomsheet');
  const filterBackdrop = document.querySelector('.filter-backdrop');

  if (filterToggle && filterSheet) {
    filterToggle.addEventListener('click', () => {
      filterSheet.classList.add('active');
      if (filterBackdrop) filterBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (filterBackdrop) {
    filterBackdrop.addEventListener('click', () => {
      filterSheet.classList.remove('active');
      filterBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  const closeFilter = document.querySelector('.close-filter-sheet');
  if (closeFilter) {
    closeFilter.addEventListener('click', () => {
      filterSheet.classList.remove('active');
      if (filterBackdrop) filterBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  renderProducts();
}

// ═══════════════════════════════════
// CART PAGE
// ═══════════════════════════════════
function initCartPage() {
  const cartContainer = document.getElementById('cartPageItems');
  const summaryContainer = document.getElementById('cartSummary');
  if (!cartContainer) return;

  function render() {
    const items = Cart.getItems();
    const total = Cart.getTotal();

    if (items.length === 0) {
      cartContainer.innerHTML = `
        <div style="text-align: center; padding: 3rem; color: var(--gray-400);">
          <div style="margin-bottom: 1rem;">${ICONS.shoppingBag}</div>
          <h3 style="color: var(--gray-500); margin-bottom: 0.5rem;">Your cart is empty</h3>
          <p>Add some sofas to get started</p>
          <a href="products.html" class="btn btn-primary" style="margin-top: 1.5rem;">Browse Products</a>
        </div>
      `;
      if (summaryContainer) summaryContainer.style.display = 'none';
      return;
    }

    if (summaryContainer) summaryContainer.style.display = 'block';

    cartContainer.innerHTML = items.map(item => {
      const product = PRODUCTS.find(p => p.id === item.id);
      if (!product) return '';
      return `
        <div class="cart-page-item">
          <div class="cart-page-img">
            <img src="${product.image}" alt="${product.name}">
          </div>
          <div style="flex: 1;">
            <h4 style="font-size: 1rem; margin-bottom: 0.25rem;">${product.name}</h4>
            <p style="font-size: 0.85rem; color: var(--gray-500); margin-bottom: 0.5rem;">${product.category}</p>
            <p style="font-weight: 700; color: var(--primary); font-size: 1.1rem;">${formatPrice(product.price)}</p>
            <div class="cart-qty" style="margin-top: 0.5rem;">
              <button onclick="Cart.updateQty(${product.id}, ${item.qty - 1}); initCartPage();">${ICONS.minus}</button>
              <span>${item.qty}</span>
              <button onclick="Cart.updateQty(${product.id}, ${item.qty + 1}); initCartPage();">${ICONS.plus}</button>
            </div>
          </div>
          <div>
            <p style="font-weight: 700; font-size: 1.1rem; white-space: nowrap;">${formatPrice(product.price * item.qty)}</p>
            <button onclick="Cart.removeItem(${product.id}); initCartPage();" style="color: var(--error); margin-top: 0.5rem; cursor: pointer; background:none; border:none;">${ICONS.trash}</button>
          </div>
        </div>
      `;
    }).join('');

    if (summaryContainer) {
      const shipping = total > 25000 ? 0 : 999;
      const grandTotal = total + shipping;
      summaryContainer.innerHTML = `
        <h3>Order Summary</h3>
        <div class="summary-row">
          <span>Subtotal</span>
          <span class="value">${formatPrice(total)}</span>
        </div>
        <div class="summary-row">
          <span>Shipping</span>
          <span class="value">${shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
        </div>
        ${shipping > 0 ? `<p style="font-size: 0.8rem; color: var(--success); margin-bottom: 0.5rem;">Free shipping on orders above ₹25,000</p>` : ''}
        <div class="summary-row total">
          <span>Total</span>
          <span class="value">${formatPrice(grandTotal)}</span>
        </div>
        <a href="checkout.html" class="btn btn-primary btn-block" style="margin-top: 1rem;">Proceed to Checkout</a>
        <a href="products.html" class="btn btn-outline btn-block" style="margin-top: 0.5rem;">Continue Shopping</a>
      `;
    }
  }

  render();
  document.addEventListener('cartUpdated', render);
}

// ═══════════════════════════════════
// CHECKOUT PAGE
// ═══════════════════════════════════
function initCheckout() {
  const form = document.getElementById('checkoutForm');
  if (!form) return;

  // Render order summary
  const summaryContainer = document.getElementById('checkoutSummary');
  if (summaryContainer) {
    const items = Cart.getItems();
    const total = Cart.getTotal();
    const shipping = total > 25000 ? 0 : 999;
    const grandTotal = total + shipping;

    summaryContainer.innerHTML = `
      <h3>Order Summary</h3>
      ${items.map(item => {
        const product = PRODUCTS.find(p => p.id === item.id);
        if (!product) return '';
        return `
          <div style="display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid var(--gray-100);">
            <span style="font-size: 0.85rem;">${product.name} × ${item.qty}</span>
            <span style="font-weight: 600; font-size: 0.85rem;">${formatPrice(product.price * item.qty)}</span>
          </div>
        `;
      }).join('')}
      <div class="summary-row" style="margin-top: 1rem;">
        <span>Subtotal</span>
        <span class="value">${formatPrice(total)}</span>
      </div>
      <div class="summary-row">
        <span>Shipping</span>
        <span class="value">${shipping === 0 ? 'FREE' : formatPrice(shipping)}</span>
      </div>
      <div class="summary-row total">
        <span>Total</span>
        <span class="value">${formatPrice(grandTotal)}</span>
      </div>
    `;
  }

  // Payment option selection
  document.querySelectorAll('.payment-option').forEach(option => {
    option.addEventListener('click', () => {
      document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
      option.classList.add('selected');
      option.querySelector('input[type="radio"]').checked = true;
    });
  });

  // Form submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    
    const items = Cart.getItems();
    const orderItems = items.map(item => {
      const product = PRODUCTS.find(p => p.id === item.id);
      return product ? `${product.name} × ${item.qty} = ${formatPrice(product.price * item.qty)}` : '';
    }).filter(Boolean).join('\n');

    const whatsappMsg = `🛒 *New Order - RD SOFA MAKER*\n\n` +
      `👤 *Name:* ${formData.get('fullName')}\n` +
      `📞 *Phone:* ${formData.get('phone')}\n` +
      `📧 *Email:* ${formData.get('email') || 'N/A'}\n` +
      `📍 *Address:* ${formData.get('address')}, ${formData.get('city')}, ${formData.get('pincode')}\n` +
      `💳 *Payment:* ${formData.get('payment')}\n\n` +
      `📦 *Order Items:*\n${orderItems}\n\n` +
      `💰 *Total:* ${formatPrice(Cart.getTotal())}`;

    showSuccessPopup(
      'Order Placed Successfully!',
      'Thank you for your order. We will contact you shortly to confirm.',
      () => {
        openWhatsApp(whatsappMsg);
        Cart.clear();
      }
    );
  });
}

// ═══════════════════════════════════
// CONTACT FORM
// ═══════════════════════════════════
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    
    const whatsappMsg = `📩 *Contact Enquiry - RD SOFA MAKER*\n\n` +
      `👤 *Name:* ${formData.get('fullName')}\n` +
      `📞 *Phone:* ${formData.get('phone')}\n` +
      `📧 *Email:* ${formData.get('email') || 'N/A'}\n` +
      `💬 *Message:* ${formData.get('message')}`;

    showSuccessPopup(
      'Message Sent!',
      'We have received your message. Our team will get back to you shortly.',
      () => openWhatsApp(whatsappMsg)
    );

    form.reset();
  });
}

// ═══════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {
  // Common init
  initNavigation();
  initScrollAnimations();
  initScrollToTop();
  Cart.updateBadge();

  // Page-specific init
  const page = document.body.dataset.page;

  if (page === 'home') {
    // Render categories
    const categoryGrid = document.getElementById('categoryGrid');
    if (categoryGrid) categoryGrid.innerHTML = CATEGORIES.map(renderCategoryCard).join('');

    // Render featured products
    const featuredGrid = document.getElementById('featuredProducts');
    if (featuredGrid) {
      const featured = PRODUCTS.filter(p => ['Bestseller', 'Premium', 'Popular', 'Trending', 'Luxury', 'Custom'].includes(p.badge));
      featuredGrid.innerHTML = featured.map(renderProductCard).join('');
    }

    // Render testimonials
    const testimonialsTrack = document.querySelector('.testimonials-track');
    if (testimonialsTrack) {
      testimonialsTrack.innerHTML = TESTIMONIALS.map(renderTestimonialCard).join('');
      initTestimonialCarousel();
    }

    // Gallery
    initGallery();

    // Booking form
    initBookingForm();
  }

  if (page === 'products') {
    initProductFilters();
  }

  if (page === 'cart') {
    initCartPage();
  }

  if (page === 'checkout') {
    initCheckout();
  }

  if (page === 'contact') {
    initContactForm();
  }
});
