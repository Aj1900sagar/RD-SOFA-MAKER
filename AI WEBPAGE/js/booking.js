// ============================================
// RD SOFA MAKER – Booking Form Logic
// ============================================

function handleBookingForm(e) {
  e.preventDefault();
  
  const form = e.target;
  const name = form.querySelector('#bookingName').value.trim();
  const phone = form.querySelector('#bookingPhone').value.trim();
  const sofaType = form.querySelector('#bookingSofaType').value;
  const budget = form.querySelector('#bookingBudget').value;
  const date = form.querySelector('#bookingDate').value;
  const address = form.querySelector('#bookingAddress').value.trim();
  const message = form.querySelector('#bookingMessage').value.trim();

  if (!name || !phone || !sofaType) {
    showToast('Please fill in required fields (Name, Phone, Sofa Type)');
    return;
  }

  let whatsappMsg = `📋 *NEW BOOKING – RD SOFA MAKER*\n\n`;
  whatsappMsg += `👤 *Name:* ${name}\n`;
  whatsappMsg += `📞 *Phone:* ${phone}\n`;
  whatsappMsg += `🛋️ *Sofa Type:* ${sofaType}\n`;
  whatsappMsg += `💰 *Budget:* ${budget || 'Not specified'}\n`;
  whatsappMsg += `📅 *Preferred Visit Date:* ${date || 'Not specified'}\n`;
  whatsappMsg += `📍 *Address:* ${address || 'Not provided'}\n`;
  whatsappMsg += `💬 *Message:* ${message || 'No additional message'}\n`;

  form.reset();

  showModal(
    '✅',
    'Booking Submitted!',
    `Thank you, ${name}! Your booking has been received. Click below to confirm on WhatsApp for faster response.`,
    `<a href="https://wa.me/${PHONE}?text=${encodeURIComponent(whatsappMsg)}" target="_blank" class="btn btn-whatsapp">💬 Confirm on WhatsApp</a>
     <button class="btn btn-dark" onclick="this.closest('.modal-overlay').remove()">Close</button>`
  );
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bookingForm');
  if (form) form.addEventListener('submit', handleBookingForm);

  // Set minimum date to today
  const dateInput = document.getElementById('bookingDate');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }
});
