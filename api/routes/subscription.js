const express = require('express');
const router = express.Router();
const Subscription = require('../models/Subscribe');
const User = require('../models/User');

// Route to handle subscription
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;

    // Check if email is provided
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Check if the subscription already exists
    const existingSubscription = await Subscription.findOne({ email });
    if (existingSubscription) {
      return res.status(400).json({ error: 'Subscription already exists' });
    }

    // Create or find the user
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({
        email,
        username: email, // Ensure this is a unique field
        password: 'defaultPassword', // Set a placeholder password or handle it as required
        isAdmin: false,
      });
      await user.save();
    }

    // Create the subscription linked to the user
    const newSubscription = new Subscription({ email, user: user._id });
    await newSubscription.save();

    res.status(201).json({ message: 'Subscription successful!' });
  } catch (error) {
    console.error('Failed to subscribe:', error);
    res.status(500).json({ error: 'Failed to subscribe' });
  }
});

// Route to get all subscriptions
router.get('/', async (req, res) => {
  try {
    const subscriptions = await Subscription.find().populate('user', 'email'); // Optional: populate user field with email
    res.json(subscriptions);
  } catch (error) {
    console.error('Error fetching subscriptions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
