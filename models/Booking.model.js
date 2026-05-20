const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  doctorName: { type: String, required: true },
  doctorId: { type: String },
  patientName: { type: String, required: true },
  gender: { type: String },
  phone: { type: String },
  appointmentDate: { type: String, required: true },
  appointmentTime: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
