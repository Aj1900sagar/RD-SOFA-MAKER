// ============================================
// RD SOFA MAKER – Checkout Page Logic
// ============================================

function renderCheckoutSummary() {
  const summaryEl = document.getElementById('checkoutSummary');
  const cart = getCart();

  if (cart.length === 0) {
    window.location.href = 'cart.html';
    return;
  }

  const subtotal = getCartTotal();
  const delivery = subtotal >= 30000 ? 0 : 1500;
  const total = subtotal + delivery;

  let itemsHTML = '';
  cart.forEach(item => {
    itemsHTML += `
      <div style="display:flex; gap:12px; align-items:center; padding:10px 0; border-bottom:1px solid #f0f0f0;">
        <img src="${item.image}" alt="${item.name}" style="width:50px;height:50px;border-radius:8px;object-fit:cover;">
        <div style="flex:1;">
          <div style="font-weight:600;font-size:0.88rem;">${item.name}</div>
          <div style="font-size:0.8rem;color:#888;">Qty: ${item.quantity}</div>
        </div>
        <div style="font-weight:700;font-size:0.9rem;">${formatPrice(item.price * item.quantity)}</div>
      </div>
    `;
  });

  summaryEl.innerHTML = `
    <h3>Order Summary</h3>
    ${itemsHTML}
    <div class="summary-row" style="margin-top:16px;">
      <span>Subtotal</span>
      <span>${formatPrice(subtotal)}</span>
    </div>
    <div class="summary-row">
      <span>Delivery</span>
      <span>${delivery === 0 ? '<span style="color:#27ae60;font-weight:600;">FREE</span>' : formatPrice(delivery)}</span>
    </div>
    <div class="summary-row total">
      <span>Total</span>
      <span>${formatPrice(total)}</span>
    </div>
  `;
}

function initPaymentOptions() {
  const options = document.querySelectorAll('.payment-option');
  options.forEach(opt => {
    opt.addEventListener('click', () => {
      options.forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      opt.querySelector('input[type=radio]').checked = true;
    });
  });
}

function handleCheckout(e) {
  e.preventDefault();
  
  const form = e.target;
  const name = form.querySelector('#checkoutName').value.trim();
  const phone = form.querySelector('#checkoutPhone').value.trim();
  const address = form.querySelector('#checkoutAddress').value.trim();
  const city = form.querySelector('#checkoutCity').value.trim();
  const pincode = form.querySelector('#checkoutPincode').value.trim();
  const payment = form.querySelector('input[name="payment"]:checked')?.value;

  if (!name || !phone || !address || !city || !pincode) {
    showToast('Please fill in all required fields');
    return;
  }

  if (!payment) {
    showToast('Please select a payment method');
    return;
  }

  const cart = getCart();
  const total = getCartTotal();
  const delivery = total >= 30000 ? 0 : 1500;

  let message = `🛍️ *NEW ORDER – RD SOFA MAKER*\n\n`;
  message += `👤 *Customer:* ${name}\n`;
  message += `📞 *Phone:* ${phone}\n`;
  message += `📍 *Address:* ${address}, ${city} – ${pincode}\n`;
  message += `💳 *Payment:* ${payment === 'cod' ? 'Cash on Delivery' : 'Online Payment'}\n\n`;
  message += `📦 *Order Items:*\n`;
  cart.forEach(item => {
    message += `  • ${item.name} x${item.quantity} – ${formatPrice(item.price * item.quantity)}\n`;
  });
  message += `\n💰 *Subtotal:* ${formatPrice(total)}`;
  message += `\n🚚 *Delivery:* ${delivery === 0 ? 'FREE' : formatPrice(delivery)}`;
  message += `\n✅ *Grand Total:* ${formatPrice(total + delivery)}`;

  // Clear cart
  localStorage.removeItem('rd_cart');
  updateCartCount();

  // Show success modal
  showModal(
    '🎉',
    'Order Placed Successfully!',
    `Thank you, ${name}! Your order has been placed. We'll contact you shortly to confirm.`,
    `<a href="https://wa.me/${PHONE}?text=${encodeURIComponent(message)}" target="_blank" class="btn btn-whatsapp">💬 Confirm on WhatsApp</a>
     <a href="index.html" class="btn btn-dark">Back to Home</a>`
  );
}

document.addEventListener('DOMContentLoaded', () => {
  renderCheckoutSummary();
  initPaymentOptions();
  
  const form = document.getElementById('checkoutForm');
  if (form) form.addEventListener('submit', handleCheckout);
});
