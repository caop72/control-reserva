// models/militar.js
const mongoose = require('mongoose');

const MilitarSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  nombres_completos: {
    type: String,
    required: true,
    trim: true,
  },
  cedula: {
    type: String,
    required: true,
    trim: true,
  },
  telefono: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Militar', MilitarSchema);