const express = require('express');
const { connect } = require('./utils/db');

connect();

const server = express();
server.use(express.json()); // Para parsear JSON en requests

const movieRoutes = require('./routes/movie.routes');
const cinemaRoutes = require('./routes/cinema.routes');

server.use('/movies', movieRoutes);
server.use('/cinemas', cinemaRoutes);

server.get('/', (req, res) => {
  res.send('Bienvenido a la API de Movies y Cines');
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});