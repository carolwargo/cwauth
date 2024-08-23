// models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true, // Remove whitespace
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: { // New field to indicate admin status
    type: Boolean,
    default: false,
  },
}, { timestamps: true }); // Automatically manage createdAt and updatedAt

module.exports = mongoose.model('User', UserSchema);
