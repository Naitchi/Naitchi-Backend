import { connect } from 'mongoose';

export default async () => {
  try {
    await connect(process.env.MONGODB_URL)
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}