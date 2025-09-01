const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const BOOKINGS_FILE = path.join(__dirname, '../data/bookings.json');

// Helper to read & write JSON file
function getBookings() {
  if (!fs.existsSync(BOOKINGS_FILE)) fs.writeFileSync(BOOKINGS_FILE, '[]');
  return JSON.parse(fs.readFileSync(BOOKINGS_FILE));
}
function saveBookings(bookings) {
  fs.writeFileSync(BOOKINGS_FILE, JSON.stringify(bookings, null, 2));
}

router.post('/', (req, res) => {
  const { name, email, package: pkg, date, details } = req.body;
  if (!name || !email || !pkg || !date) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const bookings = getBookings();
  const booking = { id: String(bookings.length+1), name, email, package: pkg, date, details, createdAt: new Date() };
  bookings.push(booking);
  saveBookings(bookings);
  res.status(201).json({ message: 'Booking saved', booking });
});

router.get('/', (req, res) => {
  res.json(getBookings());
});

module.exports = router;
