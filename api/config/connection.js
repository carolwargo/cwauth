// config/connection.js
require('../dotenv').config(); // Load environment variables

const mongoose = require('mongoose');

mongoose.set('strictQuery', false); // or true, depending on your preference

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the application if the database connection fails
  }
};

module.exports = connectDB;
