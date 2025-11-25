const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

// API endpoints
app.get('/api/users', (req, res) => {
  res.json({
    users: [
      { id: 1, name: 'Tom Wakhungu', role: 'Team Lead/DevOps' },
      { id: 2, name: 'Wakhungu Nalianya', role: 'Backend Developer' },
      { id: 3, name: 'Tom Nalianya', role: 'Frontend Developer' }
    ]
  });
});

app.post('/api/users', (req, res) => {
  const { name, role } = req.body;
  res.json({ 
    message: 'User created',
    user: { id: Date.now(), name, role }
  });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});