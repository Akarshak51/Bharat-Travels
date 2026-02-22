const express = require('express');
const router = express.Router();

// Sample data for demonstration
let tours = [
    { id: 1, name: "Tour of India", price: 200 },
    { id: 2, name: "Cultural Heritage Tour", price: 150 },
];

// GET all tours
router.get('/', (req, res) => {
    res.json(tours);
});

// GET single tour by ID
router.get('/:id', (req, res) => {
    const tour = tours.find(t => t.id === parseInt(req.params.id));
    if (!tour) return res.status(404).send('Tour not found.');
    res.json(tour);
});

// POST new tour
router.post('/', (req, res) => {
    const newTour = {
        id: tours.length + 1,
        name: req.body.name,
        price: req.body.price
    };
    tours.push(newTour);
    res.status(201).json(newTour);
});

// PATCH update tour
router.patch('/:id', (req, res) => {
    const tour = tours.find(t => t.id === parseInt(req.params.id));
    if (!tour) return res.status(404).send('Tour not found.');

    if (req.body.name) tour.name = req.body.name;
    if (req.body.price) tour.price = req.body.price;

    res.json(tour);
});

// DELETE tour
router.delete('/:id', (req, res) => {
    const tourIndex = tours.findIndex(t => t.id === parseInt(req.params.id));
    if (tourIndex === -1) return res.status(404).send('Tour not found.');

    tours.splice(tourIndex, 1);
    res.status(204).send();
});

module.exports = router;