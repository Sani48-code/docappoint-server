const Booking = require('../models/Booking.model');

const createBooking = async (req, res) => {
  try {
    const { userEmail, doctorName, patientName, appointmentDate, appointmentTime } = req.body;

    if (!userEmail || !doctorName || !patientName || !appointmentDate || !appointmentTime) {
      return res.status(400).json({ message: 'All required fields must be filled' });
    }

    const booking = new Booking(req.body);
    await booking.save();
    res.status(201).json({ message: 'Appointment booked successfully!', booking });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getMyBookings = async (req, res) => {
  try {
    const { email } = req.query;
    const bookings = await Booking.find({ userEmail: email }).sort({ createdAt: -1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const updateBooking = async (req, res) => {
  try {
    const updated = await Booking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json({ message: 'Appointment updated successfully!', updated });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const deleteBooking = async (req, res) => {
  try {
    const deleted = await Booking.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json({ message: 'Appointment deleted successfully!', deleted: true });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { createBooking, getMyBookings, updateBooking, deleteBooking };
