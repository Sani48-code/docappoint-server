require('dotenv').config();
const mongoose = require('mongoose');
const Doctor = require('../models/Doctor.model');

const doctors = [
  {
    name: "Dr. Ayesha Rahman",
    specialty: "Cardiologist",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400",
    experience: "10 years",
    availability: ["09:00 AM - 12:00 PM", "04:00 PM - 07:00 PM"],
    description: "Highly experienced cardiologist specializing in heart diseases and preventive care.",
    hospital: "Labaid Cardiac Hospital",
    location: "Dhanmondi, Dhaka",
    fee: 800,
    rating: 4.9
  },
  {
    name: "Dr. Karim Hossain",
    specialty: "Neurologist",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400",
    experience: "12 years",
    availability: ["10:00 AM - 01:00 PM", "05:00 PM - 08:00 PM"],
    description: "Expert neurologist with extensive experience in brain and nervous system disorders.",
    hospital: "Square Hospital",
    location: "Panthapath, Dhaka",
    fee: 1200,
    rating: 4.8
  },
  {
    name: "Dr. Nusrat Jahan",
    specialty: "Pediatrician",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400",
    experience: "8 years",
    availability: ["08:00 AM - 11:00 AM", "03:00 PM - 06:00 PM"],
    description: "Dedicated pediatrician focused on child health, growth, and development.",
    hospital: "Dhaka Shishu Hospital",
    location: "Sher-e-Bangla Nagar, Dhaka",
    fee: 600,
    rating: 4.7
  },
  {
    name: "Dr. Rakib Uddin",
    specialty: "Orthopedic Surgeon",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400",
    experience: "15 years",
    availability: ["11:00 AM - 02:00 PM", "06:00 PM - 09:00 PM"],
    description: "Renowned orthopedic surgeon specializing in bone and joint disorders.",
    hospital: "BIRDEM General Hospital",
    location: "Shahbag, Dhaka",
    fee: 1500,
    rating: 4.6
  },
  {
    name: "Dr. Fatema Begum",
    specialty: "Dermatologist",
    image: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=400",
    experience: "7 years",
    availability: ["09:00 AM - 12:00 PM", "04:00 PM - 07:00 PM"],
    description: "Experienced dermatologist treating skin, hair, and nail conditions.",
    hospital: "Apollo Hospitals",
    location: "Bashundhara, Dhaka",
    fee: 700,
    rating: 4.5
  },
  {
    name: "Dr. Imran Khan",
    specialty: "Gastroenterologist",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400",
    experience: "9 years",
    availability: ["10:00 AM - 01:00 PM", "05:00 PM - 08:00 PM"],
    description: "Specialist in digestive system diseases and gastrointestinal health.",
    hospital: "United Hospital",
    location: "Gulshan, Dhaka",
    fee: 900,
    rating: 4.4
  },
  {
    name: "Dr. Sadia Islam",
    specialty: "Gynecologist",
    image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=400",
    experience: "11 years",
    availability: ["08:00 AM - 11:00 AM", "03:00 PM - 06:00 PM"],
    description: "Compassionate gynecologist specializing in women's reproductive health.",
    hospital: "Popular Medical College Hospital",
    location: "Dhanmondi, Dhaka",
    fee: 1000,
    rating: 4.8
  },
  {
    name: "Dr. Zahirul Islam",
    specialty: "Ophthalmologist",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400",
    experience: "13 years",
    availability: ["09:00 AM - 12:00 PM", "04:00 PM - 07:00 PM"],
    description: "Eye specialist with expertise in cataract surgery and vision correction.",
    hospital: "National Eye Care",
    location: "Tejgaon, Dhaka",
    fee: 800,
    rating: 4.3
  },
  {
    name: "Dr. Tahmina Akter",
    specialty: "Endocrinologist",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400",
    experience: "6 years",
    availability: ["11:00 AM - 02:00 PM", "05:00 PM - 08:00 PM"],
    description: "Specialist in hormonal disorders including diabetes and thyroid conditions.",
    hospital: "BIRDEM General Hospital",
    location: "Shahbag, Dhaka",
    fee: 850,
    rating: 4.6
  },
  {
    name: "Dr. Mehedi Hassan",
    specialty: "Pulmonologist",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=400",
    experience: "10 years",
    availability: ["08:00 AM - 11:00 AM", "04:00 PM - 07:00 PM"],
    description: "Lung specialist treating asthma, COPD, and respiratory infections.",
    hospital: "Evercare Hospital",
    location: "Bashundhara, Dhaka",
    fee: 1100,
    rating: 4.7
  }
];

const seedDoctors = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected');

    await Doctor.deleteMany({});
    console.log('Old doctors removed');

    await Doctor.insertMany(doctors);
    console.log('10 doctors seeded successfully');

    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error);
    process.exit(1);
  }
};

seedDoctors();
