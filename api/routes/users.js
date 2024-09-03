// api/routes/users.js

const express = require('express');
const User = require('../models/User');
const authenticateToken = require('../utils/auth');
const adminOnly = require('../utils/admin');
const router = express.Router();

// Admin Route to Get All Users
router.get('/admin/users', authenticateToken, adminOnly, async (req, res) => {
  try {
    const users = await User.find({}, '-password'); // Exclude password field for security
    res.json({ users });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to get all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.find({}, 'username isAdmin'); // Select only relevant fields
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
