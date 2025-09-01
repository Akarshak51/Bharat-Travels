// routes/contact.js
const express = require('express');
const router = express.Router();

// Store messages in memory (for demo)
const messages = [];

// Contact form API
router.post('/', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  const entry = { id: (messages.length + 1).toString(), name, email, message, date: new Date() };
  messages.push(entry);
  // In real app, send email here via nodemailer...
  res.status(201).json({ message: 'Contact received', entry });
});

module.exports = router;
