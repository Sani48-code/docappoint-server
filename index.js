const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');

const doctorRoutes = require('./routes/doctor.routes');
const bookingRoutes = require('./routes/booking.routes');

const app = express();

connectDB();

app.use(cors({
  origin: '*',
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/doctors', doctorRoutes);
app.use('/api/bookings', bookingRoutes);

app.get('/', (req, res) => {
  res.send('DocAppoint Server is running');
});

module.exports = app;
