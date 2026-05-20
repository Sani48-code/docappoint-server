const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const { toNodeHandler } = require('better-auth/node');
const connectDB = require('./config/db');
const auth = require('./config/auth');

const doctorRoutes = require('./routes/doctor.routes');
const bookingRoutes = require('./routes/booking.routes');

const app = express();

connectDB();

app.use(cors({
  origin: ['https://docappoint-client.vercel.app', 'http://localhost:5173'],
  credentials: true
}));

app.all('/api/auth/*any', toNodeHandler(auth));

app.use(express.json());
app.use(cookieParser());

app.use('/api/doctors', doctorRoutes);
app.use('/api/bookings', bookingRoutes);

app.get('/', (req, res) => {
  res.send('DocAppoint Server is running');
});

module.exports = app;
