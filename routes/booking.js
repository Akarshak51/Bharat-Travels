// routes/bookings.js
const express = require('express');
const router = express.Router();

// Store bookings in memory for demo
const bookings = [];

// Create a booking
router.post('/', (req, res) => {
  const { name, email, package, date, details } = req.body;
  if (!name || !email || !package || !date) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const booking = {
    id: (bookings.length + 1).toString(),
    name, email, package, date, details
  };
  bookings.push(booking);
  res.status(201).json({ message: 'Booking successful', booking });
});

// List all bookings (for admin/demo)
router.get('/', (req, res) => {
  res.status(200).json(bookings);
});

module.exports = router;
