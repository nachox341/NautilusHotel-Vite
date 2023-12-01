const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3001;
//const PORT = process.env.PORT || 3000;

// Configuración de la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nautilus',
});

// Conexión a la base de datos
db.connect(err => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

// Ruta de ejemplo para obtener datos desde la base de datos
app.get('/api/data', (req, res) => {
  const sql = 'SELECT * FROM tu_tabla';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      res.status(500).json({ error: 'Error interno del servidor' });
    } else {
      res.json(result);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});