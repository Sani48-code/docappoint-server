const Doctor = require('../models/Doctor.model');

const getAllDoctors = async (req, res) => {
  try {
    const { top, search, sort } = req.query;
    let query = {};

    if (top === 'true') {
      query.rating = { $gte: 4.5 };
    }

    if (search) {
      query.name = { $regex: search, $options: 'i' };
    }

    let doctors = await Doctor.find(query);

    if (sort === 'fee_asc') {
      doctors = doctors.sort((a, b) => a.fee - b.fee);
    } else if (sort === 'fee_desc') {
      doctors = doctors.sort((a, b) => b.fee - a.fee);
    } else if (sort === 'exp') {
      doctors = doctors.sort((a, b) =>
        parseInt(b.experience) - parseInt(a.experience)
      );
    }

    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

const getDoctorById = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) {
      return res.status(404).json({ message: 'Doctor not found' });
    }
    res.status(200).json(doctor);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { getAllDoctors, getDoctorById };
