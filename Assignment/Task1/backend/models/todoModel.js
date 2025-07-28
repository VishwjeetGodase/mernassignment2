const db = require('../db'); // Assuming MySQL connection setup

const Todo = {
  // Get all todos
  getAll: async () => {
    const query = 'SELECT * FROM todos';
    const [rows] = await db.query(query);
    return rows;
  },

  // Create a new todo
  create: async ({ task, status }) => {
    const query = 'INSERT INTO todos (task, status) VALUES (?, ?)';
    const [result] = await db.query(query, [task, status || 'pending']);
    const [newTodo] = await db.query('SELECT * FROM todos WHERE id = ?', [result.insertId]);
    return newTodo[0];
  },

  // Update a todo
  update: async (id, { task, status }) => {
    const query = 'UPDATE todos SET task = ?, status = ? WHERE id = ?';
    const [result] = await db.query(query, [task, status, id]);
    if (result.affectedRows === 0) {
      throw new Error('Todo not found');
    }
    const [updatedTodo] = await db.query('SELECT * FROM todos WHERE id = ?', [id]);
    return updatedTodo[0];
  },

  // Delete a todo
  delete: async (id) => {
    const query = 'DELETE FROM todos WHERE id = ?';
    const [result] = await db.query(query, [id]);
    if (result.affectedRows === 0) {
      throw new Error('Todo not found');
    }
    return { message: 'Todo deleted successfully' };
  },
};

module.exports = Todo;