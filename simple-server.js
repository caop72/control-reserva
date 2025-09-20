const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Servidor básico funcionando');
});

app.listen(3000, () => {
  console.log('🚀 Servidor básico corriendo en http://localhost:3000');
});
