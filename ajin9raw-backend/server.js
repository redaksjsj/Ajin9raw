const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes); // ← toutes les routes d'auth seront accessibles via /api/auth
const courseRoutes = require('./routes/courseRoutes');
app.use('/api/courses', courseRoutes);
const categoryRoutes = require('./routes/categoryRoutes');
app.use('/api/categories', categoryRoutes);
app.get('/', (req, res) => {
  res.send('API Ajin9raw fonctionne 🎉');
});

app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});
