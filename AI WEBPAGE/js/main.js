// ============================================
// RD SOFA MAKER – Main JavaScript
// Shared across all pages
// ============================================

const PHONE = '919130844058';
const PHONE_DISPLAY = '91308 44058';

// --- Mobile Navigation ---
function initNav() {
  const toggle = document.querySelector('.mobile-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      mobileNav.classList.toggle('active');
      toggle.classList.toggle('active');
    });

    // Close mobile nav on link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        toggle.classList.remove('active');
      });
    });
  }

  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.classList.toggle('scrolled', window.scrollY > 50);
    }
  });
}

// --- Cart Functions ---
function getCart() {
  try {
    return JSON.parse(localStorage.getItem('rd_cart')) || [];
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem('rd_cart', JSON.stringify(cart));
  updateCartCount();
}

function addToCart(productId) {
  const product = getProductById(productId);
  if (!product) return;

  const cart = getCart();
  const existing = cart.find(item => item.id === productId);
  
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
      quantity: 1
    });
  }
  
  saveCart(cart);
  showToast(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
  return cart;
}

function updateCartItemQty(productId, qty) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity = Math.max(1, qty);
  }
  saveCart(cart);
  return cart;
}

function getCartTotal() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function getCartCount() {
  const cart = getCart();
  return cart.reduce((count, item) => count + item.quantity, 0);
}

function updateCartCount() {
  const countElements = document.querySelectorAll('.cart-count');
  const count = getCartCount();
  countElements.forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
}

// --- WhatsApp Functions ---
function whatsappOrder(productId) {
  const product = getProductById(productId);
  if (!product) return;
  const message = `Hi! I'm interested in ordering:\n\n🛋️ *${product.name}*\n💰 Price: ${formatPrice(product.price)}\n📦 Category: ${product.category}\n\nPlease share more details.`;
  window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, '_blank');
}

function whatsappChat() {
  const message = `Hi! I'm interested in your sofa collection. Please share details.`;
  window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, '_blank');
}

function whatsappCartOrder() {
  const cart = getCart();
  if (cart.length === 0) return;
  
  let message = `Hi! I'd like to place an order:\n\n`;
  cart.forEach(item => {
    message += `🛋️ ${item.name} x${item.quantity} – ${formatPrice(item.price * item.quantity)}\n`;
  });
  message += `\n💰 *Total: ${formatPrice(getCartTotal())}*\n\nPlease confirm availability and delivery.`;
  window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`, '_blank');
}

// --- Toast Notification ---
function showToast(message) {
  // Remove any existing toast
  const existing = document.querySelector('.toast-notification');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  toast.innerHTML = `<span>✅</span> ${message}`;
  toast.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 28px;
    background: #111;
    color: white;
    padding: 14px 24px;
    border-radius: 12px;
    font-size: 0.9rem;
    font-weight: 500;
    z-index: 3000;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 8px 30px rgba(0,0,0,0.3);
    animation: fadeInUp 0.4s ease;
    font-family: 'Inter', sans-serif;
    border-left: 4px solid #ff6a00;
  `;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// --- Scroll Animations ---
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// --- Modal ---
function showModal(icon, title, text, buttons) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal">
      <div class="modal-icon">${icon}</div>
      <h3>${title}</h3>
      <p>${text}</p>
      <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
        ${buttons || `<button class="btn btn-primary" onclick="this.closest('.modal-overlay').remove()">OK</button>`}
      </div>
    </div>
  `;
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('active'));
  
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });
}

// --- Active Nav Link ---
function setActiveNav() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  updateCartCount();
  setActiveNav();
  setTimeout(initScrollAnimations, 100);
});

// --- Shared HTML Components ---
function getNavHTML() {
  return `
  <nav class="navbar" id="navbar">
    <div class="nav-container">
      <a href="index.html" class="nav-logo">
        <span class="logo-icon">🛋️</span>
        <span class="logo-text">RD <span>SOFA</span> MAKER</span>
      </a>
      <div class="nav-links">
        <a href="index.html">Home</a>
        <a href="products.html">Products</a>
        <a href="booking.html">Book Now</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      </div>
      <div class="nav-actions">
        <a href="cart.html" class="nav-cart" id="cartIcon">
          🛒
          <span class="cart-count" style="display:none">0</span>
        </a>
        <a href="tel:+919130844058" class="btn btn-primary btn-sm nav-cta">📞 Call Now</a>
      </div>
      <div class="mobile-toggle">
        <span></span><span></span><span></span>
      </div>
    </div>
  </nav>
  <div class="mobile-nav">
    <a href="index.html">🏠 Home</a>
    <a href="products.html">🛋️ Products</a>
    <a href="booking.html">📅 Book Now</a>
    <a href="about.html">ℹ️ About Us</a>
    <a href="contact.html">📞 Contact</a>
    <a href="cart.html">🛒 Cart</a>
    <div class="mobile-cta">
      <a href="tel:+919130844058" class="btn btn-primary btn-sm">📞 Call Now</a>
      <button class="btn btn-whatsapp btn-sm" onclick="whatsappChat()">💬 WhatsApp</button>
    </div>
  </div>
  `;
}

function getFooterHTML() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="logo">🛋️ RD <span>SOFA</span> MAKER</div>
          <p>Premium custom sofa manufacturer in Kiwale. High quality foam, solid wood frames, and affordable factory-direct pricing.</p>
          <div class="footer-social">
            <a href="https://wa.me/${PHONE}" target="_blank" title="WhatsApp">💬</a>
            <a href="tel:+919130844058" title="Call Us">📞</a>
            <a href="mailto:rdsofa@example.com" title="Email">✉️</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <a href="index.html">Home</a>
          <a href="products.html">All Products</a>
          <a href="booking.html">Book Custom Sofa</a>
          <a href="about.html">About Us</a>
          <a href="contact.html">Contact</a>
        </div>
        <div class="footer-col">
          <h4>Categories</h4>
          <a href="products.html?category=L Shape Sofa">L Shape Sofa</a>
          <a href="products.html?category=Recliner Sofa">Recliner Sofa</a>
          <a href="products.html?category=Wooden Sofa">Wooden Sofa</a>
          <a href="products.html?category=Fabric Sofa">Fabric Sofa</a>
          <a href="products.html?category=Leather Sofa">Leather Sofa</a>
          <a href="products.html?category=Custom Made Sofa">Custom Made</a>
        </div>
        <div class="footer-col">
          <h4>Contact</h4>
          <a href="tel:+919130844058">📞 91308 44058</a>
          <a href="tel:+918840902715">📞 88409 02715</a>
          <a href="tel:+919918980802">📞 99189 80802</a>
          <a href="https://wa.me/${PHONE}" target="_blank">💬 WhatsApp Chat</a>
          <a href="contact.html">📍 Kiwale – 412101</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© ${new Date().getFullYear()} RD SOFA MAKER. All rights reserved. | Kiwale, Maharashtra</p>
      </div>
    </div>
  </footer>
  <a href="https://wa.me/${PHONE}" target="_blank" class="whatsapp-float" title="Chat on WhatsApp">💬</a>
  `;
}

function getWhatsAppFloat() {
  return `<a href="https://wa.me/${PHONE}" target="_blank" class="whatsapp-float" title="Chat on WhatsApp">💬</a>`;
}
