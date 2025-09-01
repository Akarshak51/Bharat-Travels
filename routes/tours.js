// routes/tours.js
const express = require('express');
const router = express.Router();
const tours = require('../data/tours.json');

// Get all tours
router.get('/', (req, res) => {
  res.status(200).json(tours);
});

// Get a single tour by id
router.get('/:id', (req, res) => {
  const tour = tours.find(t => t.id === req.params.id);
  if (tour) res.status(200).json(tour);
  else res.status(404).json({ error: 'Tour not found' });
});

module.exports = router;
