// ============================================
// RD SOFA MAKER – Product Data
// ============================================

const PRODUCTS = [
  // L Shape Sofas
  {
    id: 'ls-01',
    name: 'Luxury L Shape Sofa – Model LS-01',
    category: 'L Shape Sofa',
    price: 32000,
    originalPrice: 45000,
    image: 'images/lshape-1.png',
    images: ['images/lshape-1.png', 'images/lshape-2.png'],
    description: 'Premium foam + Solid wood frame. Modern L-shaped design perfect for spacious living rooms. Available in multiple fabric options.',
    material: 'Fabric',
    size: 'Large',
    badge: 'Bestseller',
    specs: {
      'Dimensions': '280 x 180 x 85 cm',
      'Seating Capacity': '6-7 Persons',
      'Frame Material': 'Solid Sheesham Wood',
      'Upholstery': 'Premium Fabric',
      'Foam Density': '40D High Resilience',
      'Warranty': '5 Years Frame / 2 Years Foam',
      'Assembly': 'Minimal assembly required'
    }
  },
  {
    id: 'ls-02',
    name: 'Modern L Shape Sectional – Model LS-02',
    category: 'L Shape Sofa',
    price: 38000,
    originalPrice: 52000,
    image: 'images/lshape-2.png',
    images: ['images/lshape-2.png', 'images/lshape-1.png'],
    description: 'Elegant navy blue sectional sofa with deep seating and plush cushions. Perfect for modern homes.',
    material: 'Fabric',
    size: 'Large',
    badge: 'New Arrival',
    specs: {
      'Dimensions': '300 x 190 x 82 cm',
      'Seating Capacity': '7-8 Persons',
      'Frame Material': 'Solid Teak Wood',
      'Upholstery': 'Premium Suede Fabric',
      'Foam Density': '42D High Resilience',
      'Warranty': '5 Years Frame / 2 Years Foam',
      'Assembly': 'Modular – Easy assembly'
    }
  },
  {
    id: 'ls-03',
    name: 'Compact L Shape Sofa – Model LS-03',
    category: 'L Shape Sofa',
    price: 25000,
    originalPrice: 34000,
    image: 'images/lshape-1.png',
    images: ['images/lshape-1.png', 'images/lshape-2.png'],
    description: 'Space-saving L-shape sofa ideal for compact living rooms and apartments.',
    material: 'Fabric',
    size: 'Medium',
    badge: 'Popular',
    specs: {
      'Dimensions': '220 x 150 x 80 cm',
      'Seating Capacity': '4-5 Persons',
      'Frame Material': 'Solid Pine Wood',
      'Upholstery': 'Cotton Blend Fabric',
      'Foam Density': '35D Comfort',
      'Warranty': '3 Years Frame / 2 Years Foam',
      'Assembly': 'Minimal assembly required'
    }
  },

  // Recliner Sofas
  {
    id: 'rc-01',
    name: 'Premium Leather Recliner – Model RC-01',
    category: 'Recliner Sofa',
    price: 42000,
    originalPrice: 58000,
    image: 'images/recliner-1.png',
    images: ['images/recliner-1.png', 'images/recliner-2.png'],
    description: 'Luxurious leather recliner with motorized mechanism. Ultimate comfort for your living room.',
    material: 'Leather',
    size: 'Medium',
    badge: 'Premium',
    specs: {
      'Dimensions': '200 x 95 x 100 cm',
      'Seating Capacity': '3 Persons + 2 Recliners',
      'Frame Material': 'Metal + Solid Wood',
      'Upholstery': 'Top Grain Leather',
      'Recline Type': 'Manual Mechanism',
      'Warranty': '5 Years Frame / 3 Years Mechanism',
      'Assembly': 'Pre-assembled'
    }
  },
  {
    id: 'rc-02',
    name: 'Fabric Recliner Sofa – Model RC-02',
    category: 'Recliner Sofa',
    price: 35000,
    originalPrice: 48000,
    image: 'images/recliner-2.png',
    images: ['images/recliner-2.png', 'images/recliner-1.png'],
    description: 'Cozy fabric recliner with cup holders and storage. Perfect for movie nights and relaxation.',
    material: 'Fabric',
    size: 'Medium',
    badge: 'Top Rated',
    specs: {
      'Dimensions': '210 x 100 x 98 cm',
      'Seating Capacity': '3 Persons + 2 Recliners',
      'Frame Material': 'Metal Frame',
      'Upholstery': 'Premium Micro Fabric',
      'Recline Type': 'Manual Lever',
      'Warranty': '3 Years Frame / 2 Years Mechanism',
      'Assembly': 'Pre-assembled'
    }
  },
  {
    id: 'rc-03',
    name: 'Single Seat Recliner – Model RC-03',
    category: 'Recliner Sofa',
    price: 18000,
    originalPrice: 25000,
    image: 'images/recliner-1.png',
    images: ['images/recliner-1.png', 'images/recliner-2.png'],
    description: 'Compact single-seat recliner perfect for personal space. Lean back and relax in style.',
    material: 'Leather',
    size: 'Small',
    badge: '',
    specs: {
      'Dimensions': '85 x 90 x 100 cm',
      'Seating Capacity': '1 Person',
      'Frame Material': 'Metal + Solid Wood',
      'Upholstery': 'PU Leather',
      'Recline Type': 'Push-back Manual',
      'Warranty': '3 Years Frame / 2 Years Mechanism',
      'Assembly': 'Pre-assembled'
    }
  },

  // Wooden Sofas
  {
    id: 'wd-01',
    name: 'Classic Teak Wood Sofa – Model WD-01',
    category: 'Wooden Sofa',
    price: 28000,
    originalPrice: 38000,
    image: 'images/wooden-1.png',
    images: ['images/wooden-1.png', 'images/wooden-2.png'],
    description: 'Handcrafted teak wood sofa with premium cushions. Timeless design meets modern comfort.',
    material: 'Wood',
    size: 'Medium',
    badge: 'Handcrafted',
    specs: {
      'Dimensions': '190 x 80 x 85 cm',
      'Seating Capacity': '3 Persons',
      'Frame Material': 'Solid Teak Wood',
      'Finish': 'Natural Teak Finish',
      'Cushion': 'Removable Premium Foam Cushions',
      'Warranty': '10 Years Frame',
      'Assembly': 'Fully assembled'
    }
  },
  {
    id: 'wd-02',
    name: 'Sheesham Wood Sofa Set – Model WD-02',
    category: 'Wooden Sofa',
    price: 45000,
    originalPrice: 60000,
    image: 'images/wooden-2.png',
    images: ['images/wooden-2.png', 'images/wooden-1.png'],
    description: 'Complete 5-seater sheesham wood sofa set with maroon velvet cushions. Royal aesthetics.',
    material: 'Wood',
    size: 'Large',
    badge: 'Royal Collection',
    specs: {
      'Dimensions': '3+1+1 Set',
      'Seating Capacity': '5 Persons',
      'Frame Material': 'Solid Sheesham Wood',
      'Finish': 'Honey Brown Polish',
      'Cushion': 'Maroon Velvet Premium Cushions',
      'Warranty': '10 Years Frame',
      'Assembly': 'Fully assembled'
    }
  },
  {
    id: 'wd-03',
    name: 'Modern Wooden Sofa – Model WD-03',
    category: 'Wooden Sofa',
    price: 22000,
    originalPrice: 30000,
    image: 'images/wooden-1.png',
    images: ['images/wooden-1.png', 'images/wooden-2.png'],
    description: 'Minimalist wooden sofa with clean lines and comfortable padding. Modern and practical.',
    material: 'Wood',
    size: 'Small',
    badge: '',
    specs: {
      'Dimensions': '160 x 75 x 80 cm',
      'Seating Capacity': '2 Persons',
      'Frame Material': 'Solid Mango Wood',
      'Finish': 'Walnut Finish',
      'Cushion': 'Grey Fabric Cushions',
      'Warranty': '7 Years Frame',
      'Assembly': 'Fully assembled'
    }
  },

  // Fabric Sofas
  {
    id: 'fb-01',
    name: 'Modern Fabric Sofa – Model FB-01',
    category: 'Fabric Sofa',
    price: 22000,
    originalPrice: 30000,
    image: 'images/fabric-1.png',
    images: ['images/fabric-1.png', 'images/lshape-2.png'],
    description: 'Contemporary teal fabric sofa with soft upholstery and ergonomic design for ultimate comfort.',
    material: 'Fabric',
    size: 'Medium',
    badge: 'Trending',
    specs: {
      'Dimensions': '200 x 85 x 82 cm',
      'Seating Capacity': '3 Persons',
      'Frame Material': 'Solid Pine Wood',
      'Upholstery': 'Premium Linen Fabric',
      'Foam Density': '38D Comfort',
      'Warranty': '5 Years Frame / 2 Years Fabric',
      'Assembly': 'Minimal assembly required'
    }
  },
  {
    id: 'fb-02',
    name: 'Velvet 3-Seater Sofa – Model FB-02',
    category: 'Fabric Sofa',
    price: 26000,
    originalPrice: 35000,
    image: 'images/fabric-1.png',
    images: ['images/fabric-1.png'],
    description: 'Elegant velvet sofa with channel tufting. Adds luxury and charm to any living space.',
    material: 'Fabric',
    size: 'Medium',
    badge: '',
    specs: {
      'Dimensions': '210 x 88 x 85 cm',
      'Seating Capacity': '3 Persons',
      'Frame Material': 'Solid Sheesham Wood',
      'Upholstery': 'Premium Velvet',
      'Foam Density': '40D High Resilience',
      'Warranty': '5 Years Frame / 2 Years Fabric',
      'Assembly': 'Pre-assembled'
    }
  },
  {
    id: 'fb-03',
    name: 'Compact 2-Seater Fabric – Model FB-03',
    category: 'Fabric Sofa',
    price: 15000,
    originalPrice: 20000,
    image: 'images/fabric-1.png',
    images: ['images/fabric-1.png'],
    description: 'Compact and cozy 2-seater fabric sofa. Ideal for bedrooms, reading nooks, and small spaces.',
    material: 'Fabric',
    size: 'Small',
    badge: 'Budget Pick',
    specs: {
      'Dimensions': '140 x 78 x 80 cm',
      'Seating Capacity': '2 Persons',
      'Frame Material': 'Pine Wood',
      'Upholstery': 'Cotton Blend Fabric',
      'Foam Density': '32D Standard',
      'Warranty': '3 Years Frame / 1 Year Fabric',
      'Assembly': 'Pre-assembled'
    }
  },

  // Leather Sofas
  {
    id: 'lt-01',
    name: 'Premium Black Leather Sofa – Model LT-01',
    category: 'Leather Sofa',
    price: 48000,
    originalPrice: 65000,
    image: 'images/leather-1.png',
    images: ['images/leather-1.png', 'images/recliner-1.png'],
    description: 'Sleek black leather sofa with chrome legs. A statement piece for modern, luxurious interiors.',
    material: 'Leather',
    size: 'Large',
    badge: 'Luxury',
    specs: {
      'Dimensions': '240 x 90 x 80 cm',
      'Seating Capacity': '4 Persons',
      'Frame Material': 'Stainless Steel + Solid Wood',
      'Upholstery': 'Top Grain Italian Leather',
      'Foam Density': '42D Premium',
      'Warranty': '7 Years Frame / 3 Years Leather',
      'Assembly': 'Pre-assembled'
    }
  },
  {
    id: 'lt-02',
    name: 'Brown Leather Chesterfield – Model LT-02',
    category: 'Leather Sofa',
    price: 55000,
    originalPrice: 75000,
    image: 'images/leather-1.png',
    images: ['images/leather-1.png'],
    description: 'Classic Chesterfield design in rich brown leather. Deep button tufting and rolled arms.',
    material: 'Leather',
    size: 'Medium',
    badge: 'Classic',
    specs: {
      'Dimensions': '220 x 95 x 85 cm',
      'Seating Capacity': '3 Persons',
      'Frame Material': 'Solid Teak Wood',
      'Upholstery': 'Full Grain Leather',
      'Foam Density': '40D High Resilience',
      'Warranty': '7 Years Frame / 3 Years Leather',
      'Assembly': 'Pre-assembled'
    }
  },
  {
    id: 'lt-03',
    name: 'Leather Loveseat – Model LT-03',
    category: 'Leather Sofa',
    price: 28000,
    originalPrice: 38000,
    image: 'images/leather-1.png',
    images: ['images/leather-1.png'],
    description: 'Compact leather loveseat perfect for any room. Soft leather finish with elegant design.',
    material: 'Leather',
    size: 'Small',
    badge: '',
    specs: {
      'Dimensions': '150 x 82 x 78 cm',
      'Seating Capacity': '2 Persons',
      'Frame Material': 'Solid Wood',
      'Upholstery': 'PU Leather (Premium)',
      'Foam Density': '35D Comfort',
      'Warranty': '5 Years Frame / 2 Years PU',
      'Assembly': 'Pre-assembled'
    }
  },

  // Custom Made Sofas
  {
    id: 'cm-01',
    name: 'Custom Curved Sofa – Model CM-01',
    category: 'Custom Made Sofa',
    price: 40000,
    originalPrice: 55000,
    image: 'images/custom-1.png',
    images: ['images/custom-1.png', 'images/fabric-1.png'],
    description: 'Unique curved design custom built to your specifications. Choose your fabric, color, and size.',
    material: 'Fabric',
    size: 'Large',
    badge: 'Custom',
    specs: {
      'Dimensions': 'As per customer requirements',
      'Seating Capacity': 'Customizable',
      'Frame Material': 'Solid Sheesham / Teak Wood',
      'Upholstery': 'Customer choice – 50+ fabrics',
      'Foam Density': '40D Premium',
      'Warranty': '5 Years Frame / 2 Years Upholstery',
      'Lead Time': '15-20 working days'
    }
  },
  {
    id: 'cm-02',
    name: 'Custom Modular Sofa Set – Model CM-02',
    category: 'Custom Made Sofa',
    price: 50000,
    originalPrice: 70000,
    image: 'images/custom-1.png',
    images: ['images/custom-1.png'],
    description: 'Build your perfect sofa with modular sections. Rearrange as you like, built to your exact needs.',
    material: 'Fabric',
    size: 'Large',
    badge: 'Exclusive',
    specs: {
      'Dimensions': 'Modular – Customizable',
      'Seating Capacity': '6-10 Persons',
      'Frame Material': 'Solid Teak Wood',
      'Upholstery': 'Customer choice – Premium Range',
      'Foam Density': '42D Ultra Premium',
      'Warranty': '7 Years Frame / 3 Years Upholstery',
      'Lead Time': '20-25 working days'
    }
  },
  {
    id: 'cm-03',
    name: 'Custom Design Your Dream Sofa',
    category: 'Custom Made Sofa',
    price: 20000,
    originalPrice: null,
    image: 'images/custom-1.png',
    images: ['images/custom-1.png'],
    description: 'Starting from ₹20,000. Tell us your design, size, material & budget – we\'ll build it for you!',
    material: 'Any',
    size: 'Any',
    badge: 'Starting Price',
    specs: {
      'Dimensions': 'Your Choice',
      'Material': 'Your Choice',
      'Color': 'Your Choice',
      'Budget': 'Your Choice',
      'Lead Time': '10-25 working days'
    }
  }
];

// Get product by ID
function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

// Get products by category
function getProductsByCategory(category) {
  if (!category || category === 'All') return PRODUCTS;
  return PRODUCTS.filter(p => p.category === category);
}

// Get unique categories
function getCategories() {
  return [...new Set(PRODUCTS.map(p => p.category))];
}

// Format price
function formatPrice(price) {
  return '₹' + price.toLocaleString('en-IN');
}

// Generate product card HTML
function createProductCard(product) {
  const discount = product.originalPrice ? Math.round((1 - product.price / product.originalPrice) * 100) : 0;
  return `
    <div class="product-card animate-on-scroll" data-category="${product.category}" data-material="${product.material}" data-size="${product.size}" data-price="${product.price}">
      <div class="card-image">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
        ${product.badge ? `<span class="card-badge">${product.badge}</span>` : ''}
        <div class="card-actions-overlay">
          <button class="action-btn" onclick="addToCart('${product.id}')" title="Add to Cart">🛒</button>
          <button class="action-btn" onclick="whatsappOrder('${product.id}')" title="WhatsApp Order">💬</button>
        </div>
      </div>
      <div class="card-body">
        <div class="card-category">${product.category}</div>
        <h3 class="card-title">${product.name}</h3>
        <p class="card-desc">${product.description}</p>
        <div class="card-price">
          ${formatPrice(product.price)} <span>${product.originalPrice ? `${formatPrice(product.originalPrice)}` : 'onwards'}</span>
          ${discount > 0 ? ` <span style="color:#27ae60; font-size:0.85rem; font-weight:600;">${discount}% OFF</span>` : ''}
        </div>
        <div class="card-buttons">
          <a href="product-detail.html?id=${product.id}" class="btn btn-primary btn-sm">View Details</a>
          <button class="btn btn-outline btn-sm" onclick="addToCart('${product.id}')">Add to Cart</button>
          <button class="btn btn-whatsapp btn-sm" onclick="whatsappOrder('${product.id}')">WhatsApp</button>
        </div>
      </div>
    </div>
  `;
}
