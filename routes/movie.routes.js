const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movie.controllers');

router.post('/', movieController.createMovie);           // Crear película
router.get('/', movieController.getMovies);             // Obtener todas
router.get('/id/:id', movieController.getMovieById);    // Obtener por ID
router.get('/title/:title', movieController.getMovieByTitle); // Obtener por título
router.get('/genre/:genre', movieController.getMoviesByGenre); // Por género
router.get('/year/:year', movieController.getMoviesFromYear);  // Desde un año
router.put('/:id', movieController.updateMovie);        // Modificar
router.delete('/:id', movieController.deleteMovie);     // Eliminar

module.exports = router;