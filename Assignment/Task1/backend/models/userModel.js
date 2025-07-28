const db = require('../db');

const insertUser = async (name, tech) => {
  const [result] = await db.execute(
    'INSERT INTO users (name, tech) VALUES (?, ?)', [name, tech]
  );
  return result;
};

const getAllUsers = async () => {
  const [rows] = await db.execute('SELECT * FROM users ORDER BY id DESC');
  return rows;
};

module.exports = { insertUser, getAllUsers };
