import express from 'express';
const router = express.Router();
import { createGame, drawCards } from '../controllers/iGame';

router.post('/', createGame);
//router.post('/draw', drawCards);

export default router;
