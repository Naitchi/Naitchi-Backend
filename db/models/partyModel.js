import mongoose from 'mongoose';

// Définition du schéma pour Player
const PlayerSchema = new mongoose.Schema({
  _id: false,
  id: ObjectId,
  ip: { type: String, required: true },
  name: { type: String, required: true },
  hand: [{ card: Number, color: { type: String, enum: ['RED', 'BLUE', 'GREEN', 'YELLOW'] } }], // Référence à un modèle Card
});

// Définition du schéma pour Party
const PartySchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Player', required: true }, // Référence à un modèle Player
  players: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }], // Référence à un modèle Player
  rules: [
    {
      type: String,
      enum: ['LOSER', 'STACKED', 'MORE', 'THE_ONLY_COUNTER', 'JOIN_IN_PROGRESS'],
    },
  ],
  middleCard: {
    card: Number,
    color: { type: String, enum: ['RED', 'BLUE', 'GREEN', 'YELLOW'] },
    required: true,
  }, // Référence à un modèle Card
  direction: { type: Boolean, required: true },
});

const PlayerModel = mongoose.model('Player', PlayerSchema);
const PartyModel = mongoose.model('Party', PartySchema);

export { PlayerModel, PartyModel };
