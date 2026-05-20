const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  image: { type: String },
  experience: { type: String },
  availability: [{ type: String }],
  description: { type: String },
  hospital: { type: String },
  location: { type: String },
  fee: { type: Number },
  rating: { type: Number, default: 4.0 }
});

module.exports = mongoose.model('Doctor', doctorSchema);
