const mongoose = require('mongoose'); 
const uri = 'mongodb://localhost:27017/formulario_r';
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 10, // Tamaño máximo del pool de conexiones
};

mongoose.connect(uri, options)
  .then(() => console.log('Conectado a MongoDB con pool'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

module.exports = mongoose;
