const express = require('express');
require('./database');  // Importa y ejecuta la conexión MongoDB

const app = express();

app.get('/', (req, res) => {
  res.send('Servidor básico funcionando');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
