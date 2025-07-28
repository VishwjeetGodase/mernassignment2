import React, { useEffect, useState } from 'react';
import api from '../api'; // Adjust the path if this file is in a different folder

const TodoScreen = () => {
  const [todos, setTodos] = useState([]);
  const [modalType, setModalType] = useState(null); // 'add', 'edit', 'delete'
  const [currentTodo, setCurrentTodo] = useState({ id: null, task: '', status: 'pending' });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await api.get('/api/todos');
      setTodos(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch todos');
    }
  };

  const handleAddTodo = async () => {
    try {
      const response = await api.post('/api/todos', {
        task: currentTodo.task,
        status: currentTodo.status,
      });
      setTodos([...todos, response.data]);
      closeModal();
    } catch (err) {
      setError('Failed to add todo');
    }
  };

  const handleEditTodo = async () => {
    try {
      const response = await api.put(`/api/todos/${currentTodo.id}`, {
        task: currentTodo.task,
        status: currentTodo.status,
      });
      setTodos(todos.map(todo => (todo.id === currentTodo.id ? response.data : todo)));
      closeModal();
    } catch (err) {
      setError('Failed to update todo');
    }
  };

  const handleDeleteTodo = async () => {
    try {
      await api.delete(`/api/todos/${currentTodo.id}`);
      setTodos(todos.filter(todo => todo.id !== currentTodo.id));
      closeModal();
    } catch (err) {
      setError('Failed to delete todo');
    }
  };

  const openModal = (type, todo = { id: null, task: '', status: 'pending' }) => {
    setModalType(type);
    setCurrentTodo(todo);
    setError(null);
    document.getElementById('todoModal').style.display = 'block';
  };

  const closeModal = () => {
    setModalType(null);
    setCurrentTodo({ id: null, task: '', status: 'pending' });
    document.getElementById('todoModal').style.display = 'none';
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Todo List</h1>
      <button className="btn btn-primary mb-3" onClick={() => openModal('add')}>
        Add Todo
      </button>

      {error && <div className="alert alert-danger">{error}</div>}

      <ul className="list-group">
        {todos.map(todo => (
          <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{todo.task}</strong> - {todo.status} <br />
              <small>Created: {new Date(todo.created_at).toLocaleString()}</small>
            </div>
            <div>
              <button className="btn btn-sm btn-warning me-2" onClick={() => openModal('edit', todo)}>
                Edit
              </button>
              <button className="btn btn-sm btn-danger" onClick={() => openModal('delete', todo)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal */}
      <div className="modal" id="todoModal" style={{ display: 'none', background: '#000000aa' }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">
                {modalType === 'add'
                  ? 'Add Todo'
                  : modalType === 'edit'
                  ? 'Edit Todo'
                  : 'Delete Todo'}
              </h5>
              <button type="button" className="btn-close" onClick={closeModal}></button>
            </div>
            <div className="modal-body">
              {modalType === 'delete' ? (
                <p>Are you sure you want to delete the todo: <strong>{currentTodo.task}</strong>?</p>
              ) : (
                <form>
                  <div className="mb-3">
                    <label htmlFor="task" className="form-label">Task</label>
                    <input
                      type="text"
                      className="form-control"
                      id="task"
                      value={currentTodo.task}
                      onChange={(e) => setCurrentTodo({ ...currentTodo, task: e.target.value })}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select
                      className="form-select"
                      id="status"
                      value={currentTodo.status}
                      onChange={(e) => setCurrentTodo({ ...currentTodo, status: e.target.value })}
                    >
                      <option value="pending">Pending</option>
                      <option value="completed">Completed</option>
                    </select>
                  </div>
                </form>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={closeModal}>Close</button>
              {modalType === 'add' && (
                <button type="button" className="btn btn-primary" onClick={handleAddTodo}>Add</button>
              )}
              {modalType === 'edit' && (
                <button type="button" className="btn btn-primary" onClick={handleEditTodo}>Update</button>
              )}
              {modalType === 'delete' && (
                <button type="button" className="btn btn-danger" onClick={handleDeleteTodo}>Delete</button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoScreen;
