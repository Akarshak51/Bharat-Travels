// app.js
const express = require('express');
const path = require('path');
const toursRoutes = require('./routes/tours');
const bookingsRoutes = require('./routes/bookings');
const contactRoutes = require('./routes/contact');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Serve frontend static files if any (adapt as needed)
app.use('/api/bookings', bookingsRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/booking.html'));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log('Server running at http://localhost:' + PORT);
});
