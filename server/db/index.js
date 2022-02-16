import mongoose from 'mongoose';
import Author from './Author.js';
import Book from './Book.js';

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/BattleStats');

const db = {
  connection: mongoose.connection,
  models: {
    Author,
    Book,
  }
};

export default db;
