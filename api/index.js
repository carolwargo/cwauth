require('dotenv').config();  // Load environment variables at the top
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/connection.js'); // Import the connection function
const User = require('./models/User');
const adminOnly = require('./utils/admin');
const authenticateToken = require('./utils/auth');
const app = express();



// Middleware setup
// Middleware setup
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
connectDB();

// Define constants using environment variables
const saltRounds = 10;
const secret = process.env.JWT_SECRET;

if (!secret) {
  console.error('JWT_SECRET is not defined in .env file');
}

// Registration Route
// Registration Route
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
  
    // Check if username or password is missing
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
  
    try {
      // Check if the username already exists
      const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(400).json({ error: 'Username already taken' });
      }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
   // Create new user
   const userDoc = await User.create({
    username,
    password: hashedPassword,
  });

  res.status(201).json({ message: 'User registered successfully', user: userDoc });
} catch (e) {
  console.error(e);
  res.status(500).json({ error: 'Internal Server Error' });
}
});
// Login Route
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
  
    // Check if username or password is missing
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
  
    try {
      // Find the user by username
      const userDoc = await User.findOne({ username });
      if (!userDoc) {
        return res.status(400).json({ error: 'Invalid username or password' });
      }
  
      // Compare the password with the stored hashed password
      const passOk = await bcrypt.compare(password, userDoc.password);
      if (passOk) {
        // Generate JWT token
        jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
          if (err) throw err;
          // Set the JWT token as a cookie
          res.cookie('token', token, { httpOnly: true }).json({
            message: 'Login successful',
            user: {
              id: userDoc._id,
              username: userDoc.username,
            },
          });
        });
      } else {
        res.status(400).json({ error: 'Invalid username or password' });
      }
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Admin Route to Get All Users
  app.get('/api/admin/users', authenticateToken, adminOnly, async (req, res) => {
    try {
      // Fetch all users from the database
      const users = await User.find({}, '-password'); // Exclude password field for security
      res.json({ users });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

  // Endpoint to get all users
app.get('/api/users', async (req, res) => {
    try {
      const users = await User.find({}, 'username isAdmin'); // Select only relevant fields
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  
  // Catch-all error handling for undefined routes
  app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found' });
  });


// Error handling middleware for more detailed error messages
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

// Conditionally run seed script if SEED_DB environment variable is set
if (process.env.SEED_DB === 'true') {
  import('./utils/seeds.js')
    .then(() => {
      console.log('Seeding complete');
      process.exit(0);
    })
    .catch(err => {
      console.error('Error running seed script:', err);
      process.exit(1);
    });
} else {
  // Start the server with error handling
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Set up multer for file uploads
//const uploadMiddleware = multer({ dest: './uploads' });
//const multer = require('multer');
//app.use('/uploads', express.static(__dirname + '/uploads'));
//const fs = require('fs');