import React, { useEffect, useState } from "react";
import axios from "axios";

// Vite environment variable
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const App = () => {
  const [form, setForm] = useState({ name: "", tech: "" });
  const [users, setUsers] = useState([]); // Start as an empty array

  // Fetch users from backend
  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${backendUrl}/users`);
      console.log("Fetched users:", res.data); // ✅ debug output

      // Defensive check
      if (Array.isArray(res.data)) {
        setUsers(res.data);
      } else {
        console.error("Expected array, got:", res.data);
        setUsers([]); // fallback to empty array
      }
    } catch (err) {
      console.error("Error fetching users:", err);
      setUsers([]);
    }
  };

  // Submit form to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${backendUrl}/submit`, form);
      setForm({ name: "", tech: "" });
      fetchUsers(); // Refresh the list after submission
    } catch (err) {
      console.error("Error submitting data:", err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h2>Submit Your Favorite Tech</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          required
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{ padding: "0.5rem", marginRight: "1rem" }}
        />
        <input
          type="text"
          placeholder="Favorite Tech"
          value={form.tech}
          required
          onChange={(e) => setForm({ ...form, tech: e.target.value })}
          style={{ padding: "0.5rem", marginRight: "1rem" }}
        />
        <button type="submit" style={{ padding: "0.5rem 1rem" }}>
          Submit
        </button>
      </form>

      <h3>Submitted Users:</h3>
      <ul>
        {Array.isArray(users) && users.length > 0 ? (
          users.map((user, i) => (
            <li key={i}>
              {user.name} — <strong>{user.tech}</strong>
            </li>
          ))
        ) : (
          <li>No users submitted yet.</li>
        )}
      </ul>
    </div>
  );
};

export default App;
