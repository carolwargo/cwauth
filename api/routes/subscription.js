const express = require('express');
const router = express.Router();
const Subscription = require('../models/Subscription');
const User = require('../models/User');

// Route to handle subscription
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    // Check if email is provided
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Create or find the user
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({
        email,
        userType: 'subscriber',
      });
      await user.save();
    }

    // Create the subscription linked to the user
    const newSubscription = new Subscription({ email, user: user._id });
    await newSubscription.save();

    res.status(201).json({ message: 'Subscription successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});

module.exports = router;
