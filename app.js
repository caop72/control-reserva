// app.js
const express = require('express');
const app = express();
const port = 3000; // puerto puedes cambiarlo

// Middleware para interpretar JSON en requests
app.use(express.json());

// Ruta principal de prueba
app.get('/', (req, res) => {
  res.send('Hola Mundo desde app.js en Node.js');
});

// Configurar puerto y arrancar servidor
app.listen(port, () => {
  console.log(`Servidor levantado en http://localhost:${port}`);
});
