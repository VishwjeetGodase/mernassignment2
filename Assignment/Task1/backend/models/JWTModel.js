const bcrypt = require('bcrypt');
const db = require('../db');

const User = {
  // Register a new user
  async register({ username, password }) {
    // Check if username exists
    const [existingUsers] = await db.query('SELECT * FROM users_jwt WHERE username = ?', [username]);
    if (existingUsers.length > 0) {
      throw new Error('Username already exists');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    const [result] = await db.query('INSERT INTO users_jwt (username, password) VALUES (?, ?)', [username, hashedPassword]);
    return { id: result.insertId, username };
  },

  // Find user by username for login
  async findByUsername(username) {
    const [users] = await db.query('SELECT * FROM users_jwt WHERE username = ?', [username]);
    if (users.length === 0) {
      throw new Error('Invalid credentials');
    }
    return users[0];
  },
};

module.exports = User;