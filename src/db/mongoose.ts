import { connect, connection } from 'mongoose';

async function dbConnect(): Promise<void> {
  try {
    if (connection.readyState >= 1) return;

    console.log('connecting to db', process.env.MONGODB_URI);

    await connect(process.env.MONGODB_URI ?? '');
  } catch (error) {
    console.log('error connecting to db', error);
  }
}

export default dbConnect;
