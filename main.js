// Dynamic Booking Form (simple feedback)
document.querySelector('.booking-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your booking request! Our travel expert will contact you soon.');
});

// Responsive Hero image
window.addEventListener('resize', function(){
  document.querySelector('header').style.backgroundSize = window.innerWidth<600?'auto':'cover';
});

// Chatbot toggler
document.getElementById('open-chatbot').onclick = function() {
  const win = document.getElementById('chatbot-window');
  win.classList.toggle('hidden');
};
