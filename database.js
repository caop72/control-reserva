require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URI = process.env.MONGO_URI;

class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 15000  // 15 segundos timeout
    })
    .then(() => {
      console.log('Conectado a MongoDB');
    })
    .catch(err => {
      console.error('Error en la conexión a MongoDB:', err);
    });
  }
}

module.exports = new Database();
