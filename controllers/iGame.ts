import { Request, Response } from 'express';
import { getRandomCard, getRandomHand } from '../fonctions/random';

// Types
import Party, { Player } from '../type/partyType';
import Card from '../type/cardType';

import pusher from '../pusher';
import mongoose from 'mongoose';

// Notre but est de gardé un "cahier de compte" de la partie dans le BackOffice
// pour ensuite n'envoyé que le nécessaire aux joueurs (leur jeu, la carte du milieu
// ,le sens et le nombre des cartes que chaque adversaire a.) Mais pour ne pas envoyer toutes les données à chacun je dois faire : soit une fonction get au départ ?
// Quand le joueur fait une action => get
// Et pour montrer l'action aux autres => channel spécialisé du joueur et on trigger un event dessus
// Obligé de faire une requete par personne au début anyway pour distribué chacun leurs cartes
// On fait un trigger avec le jeu de chaque joueur à son joueur, et ensuite on refait une trigger avec
// avec les regles de la partie ? ou dans le sens inverse

export const createGame = async (req: Request, res: Response) => {
  console.log('createGame');

  const idGame = new mongoose.Types.ObjectId(); // crée un nouvel id

  const middleCard: Card | undefined = getRandomCard();
  if (!middleCard) return;

  const players: Player[] = req.body.players;
  players.forEach((player) => {
    const newHand: Card[] = getRandomHand();
    if (newHand) player.hand.concat(newHand);
  });

  try {
    const payload: Party = {
      id: idGame,
      owner: req.body.owner,
      players: req.body.players,
      rules: req.body.rules,
      middleCard: middleCard,
      direction: true,
    };
    //await pusher.trigger(`iGame-${payload.id.toString()}`, 'newGame', payload);
    res.status(201).send(payload);
  } catch (error) {
    console.error('Erreur dans le contrôleur newGame:', error, req.body);
    res.status(500).send("Une erreur s'est produite");
  }
};
