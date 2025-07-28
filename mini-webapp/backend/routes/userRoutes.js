import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/submit', async (req, res) => {
  const { name, tech } = req.body;
  const newUser = new User({ name, tech });
  await newUser.save();
  res.json({ success: true });
});

router.get('/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

export default router;
