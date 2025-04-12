const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const aiRoutes = require('./routes/aiRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/ai', aiRoutes);

app.get('/', (req, res) => {
  res.send('API Ajin9raw fonctionne 🧠');
});

app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});
