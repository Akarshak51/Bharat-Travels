const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Mongoose Connection
mongoose.connect('mongodb://localhost:27017/bharat-travels', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(`MongoDB connection error: ${err}`));

// API Routes
const toursRouter = require('./routes/tours'); // assuming routes are created in a separate 'routes' folder
const bookingsRouter = require('./routes/bookings');
const contactRouter = require('./routes/contact');

app.use('/api/tours', toursRouter);
app.use('/api/bookings', bookingsRouter);
app.use('/api/contact', contactRouter);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
