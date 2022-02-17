import mongoose from 'mongoose';
import User from './User.js';
import Book from './Book.js';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/BattleStats');

const db = {
  connection: mongoose.connection,
  models: {
    User,
    Book,
  }
};

export default db;
