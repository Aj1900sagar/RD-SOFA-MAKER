// ============================================
// RD SOFA MAKER – Cart Page Logic
// ============================================

function renderCart() {
  const cartItems = document.getElementById('cartItemsList');
  const cartSummary = document.getElementById('cartSummary');
  const cart = getCart();

  if (cart.length === 0) {
    cartItems.innerHTML = `
      <div class="cart-empty">
        <div class="icon">🛒</div>
        <h3>Your Cart is Empty</h3>
        <p>Looks like you haven't added any sofas yet. Browse our collection!</p>
        <a href="products.html" class="btn btn-primary">Browse Sofas</a>
      </div>
    `;
    cartSummary.innerHTML = '';
    return;
  }

  let itemsHTML = '';
  cart.forEach(item => {
    itemsHTML += `
      <div class="cart-item">
        <div class="item-image">
          <img src="${item.image}" alt="${item.name}">
        </div>
        <div class="item-info">
          <h4>${item.name}</h4>
          <p>${item.category}</p>
          <div class="quantity-selector" style="margin-top:8px; margin-bottom:0;">
            <button onclick="changeQty('${item.id}', -1)">−</button>
            <input type="number" value="${item.quantity}" min="1" readonly>
            <button onclick="changeQty('${item.id}', 1)">+</button>
          </div>
        </div>
        <div class="item-price">${formatPrice(item.price * item.quantity)}</div>
        <button class="item-remove" onclick="removeItem('${item.id}')" title="Remove">✕</button>
      </div>
    `;
  });
  cartItems.innerHTML = itemsHTML;

  const subtotal = getCartTotal();
  const delivery = subtotal >= 30000 ? 0 : 1500;
  const total = subtotal + delivery;

  cartSummary.innerHTML = `
    <h3>Order Summary</h3>
    <div class="summary-row">
      <span>Subtotal (${getCartCount()} items)</span>
      <span>${formatPrice(subtotal)}</span>
    </div>
    <div class="summary-row">
      <span>Delivery</span>
      <span>${delivery === 0 ? '<span style="color:#27ae60;font-weight:600;">FREE</span>' : formatPrice(delivery)}</span>
    </div>
    ${delivery === 0 ? '<div class="summary-row"><span></span><span style="color:#27ae60;font-size:0.8rem;">Free delivery on orders above ₹30,000</span></div>' : '<div class="summary-row"><span></span><span style="font-size:0.8rem;color:#888;">Free delivery on orders above ₹30,000</span></div>'}
    <div class="summary-row total">
      <span>Total</span>
      <span>${formatPrice(total)}</span>
    </div>
    <a href="checkout.html" class="btn btn-primary checkout-btn btn-lg">Proceed to Checkout</a>
    <button class="btn btn-whatsapp checkout-btn" onclick="whatsappCartOrder()" style="width:100%; justify-content:center; margin-top:8px;">💬 Order via WhatsApp</button>
    <a href="products.html" class="btn btn-outline checkout-btn" style="width:100%; justify-content:center; margin-top:8px;">Continue Shopping</a>
  `;
}

function changeQty(productId, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity = Math.max(1, item.quantity + delta);
    saveCart(cart);
    renderCart();
  }
}

function removeItem(productId) {
  removeFromCart(productId);
  renderCart();
  showToast('Item removed from cart');
}

document.addEventListener('DOMContentLoaded', renderCart);
