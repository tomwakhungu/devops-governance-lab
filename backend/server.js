const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', version: '1.0.0', timestamp: new Date().toISOString() });
});

// API endpoints
res.json({ 
  status: 'healthy', 
  version: '1.0.0', 
  timestamp: new Date().toISOString() 
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