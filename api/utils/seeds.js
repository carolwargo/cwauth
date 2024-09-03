require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const users = [
  { firstname: 'John', lastname: 'Doe', email: 'john@example.com', username: 'john', password: 'password123' },
  { firstname: 'Jane', lastname: 'Doe', email: 'jane@example.com', username: 'jane', password: 'password123' },
];


async function seed() {
  try {
    // Load the MongoDB URI from environment variables
    const uri = process.env.MONGODB_URI;

    if (!uri) {
      throw new Error('MONGODB_URI environment variable is not set');
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');


    // Clear existing collections
    await User.deleteMany({});

    // Hash passwords before inserting users
    const hashedUsers = await Promise.all(users.map(async user => ({
      ...user,
      password: await bcrypt.hash(user.password, saltRounds),
    })));

    // Insert users
    await User.insertMany(hashedUsers);

    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    mongoose.connection.close();
  }
}

seed();
