const Movie = require('../models/Movie');

exports.createMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    const savedMovie = await movie.save();
    res.status(201).json(savedMovie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ error: 'Movie not found' });
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMovieByTitle = async (req, res) => {
  try {
    const movies = await Movie.find({ title: req.params.title });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMoviesByGenre = async (req, res) => {
  try {
    const movies = await Movie.find({ genre: req.params.genre });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getMoviesFromYear = async (req, res) => {
  try {
    const movies = await Movie.find({ year: { $gte: Number(req.params.year) } });
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    const updated = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Movie not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const deleted = await Movie.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Movie not found' });
    res.json({ message: 'Movie deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};