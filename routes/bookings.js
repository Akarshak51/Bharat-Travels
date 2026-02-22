const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking'); // assume there's a Booking model defined

// GET all bookings
router.get('/', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST a new booking
router.post('/', async (req, res) => {
    const booking = new Booking({
        user: req.body.user,
        travelDetails: req.body.travelDetails,
        date: req.body.date,
        status: req.body.status
    });
    try {
        const savedBooking = await booking.save();
        res.status(201).json(savedBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PATCH update a booking
router.patch('/:id', async (req, res) => {
    try {
        const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedBooking);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// DELETE a booking
router.delete('/:id', async (req, res) => {
    try {
        await Booking.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;