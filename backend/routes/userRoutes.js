const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Signup route
router.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;

  // Basic validation
  if (!username || !email || !password) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists with that email or username' });
    }

    // Create a new user without hashing the password
    const newUser = new User({ username, email, password }); // Storing the password in plain text
    await newUser.save();
    res.status(201).json({ message: 'Signup successful, please log in.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, username, password } = req.body;

  try {
    // Find user by email or username
    const user = await User.findOne({ $or: [{ email }, { username }] });

    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Check password (plain text)
    if (user.password !== password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Login success
    res.status(200).json({ message: 'Login successful', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
