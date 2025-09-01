document.getElementById('bookingForm').onsubmit = async function(e) {
  e.preventDefault();
  let valid = true;
  let errors = {
    name: '',
    email: '',
    package: '',
    date: ''
  };

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const pkg = document.getElementById('package').value;
  const date = document.getElementById('date').value;
  const details = document.getElementById('details').value.trim();

  // Validation
  if (!name) {
    errors.name = 'Name required.';
    valid = false;
  }
  if (!email || !/^.+@.+\..+$/.test(email)) {
    errors.email = 'Valid email required.';
    valid = false;
  }
  if (!pkg) {
    errors.package = 'Select a package.';
    valid = false;
  }
  if (!date) {
    errors.date = 'Pick a date.';
    valid = false;
  }

  // Show errors
  for (let field in errors) {
    document.getElementById('error-' + field).textContent = errors[field];
  }

  if (!valid) return;

  // Send AJAX POST to backend
  const res = await fetch('/api/bookings', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ name, email, package: pkg, date, details })
  });
  const data = await res.json();
  if (res.ok) {
    document.getElementById('bookingForm').reset();
    document.getElementById('success').textContent = "Booking submitted successfully!";
  } else {
    document.getElementById('success').textContent = "Error: " + (data.error || 'Could not submit booking');
  }
};
