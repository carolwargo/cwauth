const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Contact = require('../models/Contact');

// Route to handle contact form submission
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Check if required fields are provided
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // Create or find the user
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({
        firstname: name, // Assuming name is the first name
        email,
        username: email, // Ensure you have a unique username, perhaps derived from the email
        password: 'defaultPassword', // Set a default password or a placeholder if necessary
        isAdmin: false,
      });
      await user.save();
    }

    // Create the contact inquiry linked to the user
    const newContact = new Contact({ name, email, message, user: user._id });
    await newContact.save();

    res.status(201).json({ message: 'Inquiry submitted successfully!' });
  } catch (error) {
    console.error('Failed to submit inquiry:', error);
    res.status(500).json({ error: 'Failed to submit inquiry' });
  }
});

router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
