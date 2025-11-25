import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newUser, setNewUser] = useState({ name: '', role: '' });

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${API_URL}/api/users`);
      const data = await response.json();
      setUsers(data.users);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch users');
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/users`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser),
      });
      const data = await response.json();
      setUsers([...users, data.user]);
      setNewUser({ name: '', role: '' });
    } catch (err) {
      alert('Failed to add user');
    }
  };

  if (loading) return <div className="container">Loading...</div>;
  if (error) return <div className="container">{error}</div>;

  return (
    <div className="container">
      <h1>🚀 DevOps Governance Lab</h1>
      <p className="subtitle">GitHub Governance + Docker + CI/CD + Kubernetes</p>

      <div className="card">
        <h2>Team Members</h2>
        <ul className="user-list">
          {users.map((user) => (
            <li key={user.id} className="user-item">
              <strong>{user.name}</strong>
              <span className="role">{user.role}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h2>Add Team Member</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={newUser.name}
            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Role"
            value={newUser.role}
            onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            required
          />
          <button type="submit">Add Member</button>
        </form>
      </div>
    </div>
  );
}

export default App;