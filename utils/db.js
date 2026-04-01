const mongoose = require('mongoose');

const urlDb = 'mongodb://localhost:27017/proyecto-basico-express-movies';

const connect = async () => {
  try {
    await mongoose.connect(urlDb);
    console.log('Connected to DB successfully');
  } catch (error) {
    console.log('Error connecting to DB:', error.message);
  }
};

module.exports = { connect };