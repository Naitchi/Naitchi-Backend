import { connect } from 'mongoose';

const url = process.env.MONGODB_URL;

if (!url) {
  console.error('MongoDB url is not defined.');
  process.exit(1);
}

export default async () => {
  try {
    await connect(url);
    console.log('Database successfully connected');
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`);
    throw new Error(String(error));
  }
};
