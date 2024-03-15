import { Request, Response } from 'express';

import pusher from '../pusher';

export const message = async (req: Request, res: Response) => {
  console.log('message');
  try {
    const payload = req.body;
    await pusher.trigger(`chat-${payload.idRoom}`, 'message', payload);
    res.status(201).send(payload);
  } catch (error) {
    console.error('Erreur dans le contrôleur message:', error);
    res.status(500).send("Une erreur s'est produite");
  }
};

export const newChatter = async (req: Request, res: Response) => {
  console.log('newChatter');
  try {
    const payload = req.body;
    await pusher.trigger(`chat-${payload.idRoom}`, 'newChatter', payload);
    res.status(200).send(payload);
  } catch (error) {
    console.error('Erreur dans le contrôleur message:', error);
    res.status(500).send("Une erreur s'est produite");
  }
};

export const chatterLeft = async (req: Request, res: Response) => {
  console.log('chatterLeft');
  try {
    const payload = req.body;
    await pusher.trigger(`chat-${payload.idRoom}`, 'chatterLeft', payload);
    res.status(200).send(payload);
  } catch (error) {
    console.error('Erreur dans le contrôleur message:', error);
    res.status(500).send("Une erreur s'est produite");
  }
};
