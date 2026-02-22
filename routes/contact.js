const express = require('express');
const router = express.Router();

// Sample in-memory storage for contact messages
let contactMessages = [];

// GET all contact messages
router.get('/', (req, res) => {
    res.status(200).json(contactMessages);
});

// POST a new contact message
router.post('/', (req, res) => {
    const message = req.body;
    contactMessages.push(message);
    res.status(201).json({ message: 'Contact message added!', data: message });
});

// PATCH an existing contact message
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const index = contactMessages.findIndex(msg => msg.id === parseInt(id));
    if (index !== -1) {
        contactMessages[index] = { ...contactMessages[index], ...req.body };
        res.status(200).json({ message: 'Contact message updated!', data: contactMessages[index] });
    } else {
        res.status(404).json({ message: 'Contact message not found!' });
    }
});

// DELETE a contact message
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const index = contactMessages.findIndex(msg => msg.id === parseInt(id));
    if (index !== -1) {
        contactMessages.splice(index, 1);
        res.status(200).json({ message: 'Contact message deleted!' });
    } else {
        res.status(404).json({ message: 'Contact message not found!' });
    }
});

module.exports = router;
