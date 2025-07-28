const express = require('express');
const { insertUser, getAllUsers } = require('../models/userModel');
const router = express.Router();

router.post('/submit', async (req, res) => {
  const { name, tech } = req.body;
  if (!name || !tech) return res.status(400).json({ error: 'Both fields required' });
  try {
    await insertUser(name, tech);
    res.status(201).json({ message: 'User submitted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/users', async (req, res) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
