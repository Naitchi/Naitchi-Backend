import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import dbConnection from './db/connection';

const app = express();
const server = http.createServer(app);

import index from './routes/index';
import iGame from './routes/iGame';

// Nécessaire pour les .env
dotenv.config();

dbConnection();

// Nécessaire pour le router
app.use(express.json());

app.use('/api/', index);
app.use('/api/i', iGame);

const PORT = process.env.PORT ?? 8080;

server.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
