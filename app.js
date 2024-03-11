import express from 'express';
import http from 'http';
import dotenv from 'dotenv';

const app = express();
const server = http.createServer(app);

import index from './routes/index.js';

// Nécessaire pour les .env
dotenv.config();

// Nécessaire pour le router
app.use(express.json());

app.use('/api/', index);

const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
