const express = require('express');
const router = express.Router();
const Todo = require('../models/todoModel');

// Get all todos
router.get('/todos', async (req, res) => {
  try {
    const todos = await Todo.getAll();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create a new todo
router.post('/todos', async (req, res) => {
  try {
    const { task, status } = req.body;
    if (!task) {
      return res.status(400).json({ error: 'task is required' });
    }
    const newTodo = await Todo.create({ task, status });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a todo
router.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { task, status } = req.body;
    if (!task) {
      return res.status(400).json({ error: 'task is required' });
    }
    const updatedTodo = await Todo.update(id, { task, status });
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a todo
router.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Todo.delete(id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;