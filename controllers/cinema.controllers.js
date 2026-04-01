const Cinema = require('../models/Cinema');

exports.createCinema = async (req, res) => {
  try {
    const cinema = new Cinema(req.body);
    const savedCinema = await cinema.save();
    res.status(201).json(savedCinema);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getCinemas = async (req, res) => {
  try {
    const cinemas = await Cinema.find().populate('moviesShowing');
    res.status(200).json(cinemas);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCinemaById = async (req, res) => {
  try {
    const cinema = await Cinema.findById(req.params.id).populate('moviesShowing');
    if (!cinema) return res.status(404).json({ error: 'Cinema not found' });
    res.status(200).json(cinema);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCinema = async (req, res) => {
  try {
    const updated = await Cinema.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Cinema not found' });
    res.status(200).json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteCinema = async (req, res) => {
  try {
    const deleted = await Cinema.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Cinema not found' });
    res.status(200).json({ message: 'Cinema deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};