const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for CareSchema
const CareSchema = new Schema({
  action: {
    type: String,
    required: [true, 'The care text field is required'],
  },
});

// Create model for Care
const Care = mongoose.model('care', CareSchema);

module.exports = Care;