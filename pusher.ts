import Pusher from 'pusher';
import dotenv from 'dotenv';

dotenv.config();

const id = process.env.APP_ID;
const key = process.env.APP_KEY;
const secret = process.env.APP_SECRET;
const cluster = process.env.APP_CLUSTER;

if (!id || !key || !secret || !cluster) {
  console.error('Variables from Pusher config file not defined.');
  process.exit(1);
}

const pusher = new Pusher({
  appId: id,
  key: key,
  secret: secret,
  cluster: cluster,
  useTLS: true,
});

export default pusher;
