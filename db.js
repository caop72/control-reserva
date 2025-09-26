const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',      // o IP de tu servidor MySQL
  user: 'caop72',     // reemplaza por usuario MySQL
  password: 'Qwer22**',  // reemplaza por contraseña MySQL
  database: 'registro_militar', // reemplaza por el nombre de tu base de datos
  waitForConnections: true,
  connectionLimit: 10,    // máximo conexiones simultáneas en el pool
  queueLimit: 0           // sin límite de cola
});

module.exports = pool;
