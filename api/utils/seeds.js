require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const saltRounds = 10;

const users = [
  { username: 'admin', password: 'admin123' },
  { username: 'john', password: 'pass3' },
  { username: 'jane', password: 'pass4' },
  { username: 'josh', password: 'pass6' },
  { username: 'jake', password: 'pass7' },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');

    // Clear existing collections
    await User.deleteMany({});

    // Hash passwords before inserting users
    const hashedUsers = await Promise.all(users.map(async user => ({
      username: user.username,
      password: await bcrypt.hash(user.password, saltRounds),
    })));

    // Insert users and get user IDs
    const insertedUsers = await User.insertMany(hashedUsers);
    const userMap = insertedUsers.reduce((map, user) => {
      map[user.username] = user._id;
      return map;
    }, {});

    // Update the admin user to have isAdmin set to true
    await User.updateOne(
      { username: 'admin' },
      { $set: { isAdmin: true } }
    );

    console.log('Users inserted:', insertedUsers);
    console.log('Admin user updated to isAdmin: true');
    console.log('Database seeded successfully');
  } catch (err) {
    console.error('Error seeding database:', err);
  } finally {
    mongoose.connection.close();
  }
}

seed();
