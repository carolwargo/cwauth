// api/routes/users.js

const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Contact = require('../models/Contact');


router.get('/contact', async (req, res) => {
  try {
    const contacts = await Contact.find({}, 'contact'); // Select only relevant fields
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to Get User Count
router.get('/count', async (req, res) => {
  try {
    const count = await Contact.countDocuments();
    res.json({ count });
  } catch (error) {
    console.error('Error fetching Contact count:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


module.exports = router;


