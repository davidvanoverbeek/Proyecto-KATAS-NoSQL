const express = require('express');
const router = express.Router();
const cinemaController = require('../controllers/cinema.controllers');

// Rutas
router.post('/', cinemaController.createCinema);       
router.get('/', cinemaController.getCinemas);         
router.get('/:id', cinemaController.getCinemaById);   
router.put('/:id', cinemaController.updateCinema);     
router.delete('/:id', cinemaController.deleteCinema);  

module.exports = router;