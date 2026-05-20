const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken');
const verifyOwner = require('../middleware/verifyOwner');
const {
  createBooking,
  getMyBookings,
  updateBooking,
  deleteBooking
} = require('../controllers/booking.controller');

router.post('/', verifyToken, createBooking);
router.get('/', verifyToken, verifyOwner, getMyBookings);
router.patch('/:id', verifyToken, updateBooking);
router.delete('/:id', verifyToken, deleteBooking);

module.exports = router;
