const express = require('express');
const cors = require('cors');
require('dotenv').config();
const JWTRoutes = require('./routes/JWTRoutes');
const userRoutes = require('./routes/userRoutes');
const todoRoutes = require('./routes/todoRoutes'); 
const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', JWTRoutes);   // http://localhost:5000/api/users
app.use('/api', userRoutes);   // http://localhost:5000/api/users
app.use('/api', todoRoutes);   // http://localhost:5000/api/todos

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
