const mongoose = require('mongoose');
const Cinema = require('./models/Cinema');
const Movie = require('./models/Movie');

mongoose.connect('mongodb://localhost:27017/proyecto-basico-express-movies')
  .then(async () => {
    console.log('MongoDB connected');

    await Cinema.collection.drop().catch(() => {});
    const allMovies = await Movie.find();

    const cinemas = [
      {
        name: 'Cinepolis Centro',
        address: 'Calle Principal 123',
        capacity: 150,
        moviesShowing: allMovies.slice(0, 2).map(m => m._id)
      },
      {
        name: 'Multicine Norte',
        address: 'Avenida Norte 456',
        capacity: 200,
        moviesShowing: allMovies.slice(2, 4).map(m => m._id)
      },
      {
        name: 'Cinemagic Sur',
        address: 'Boulevard Sur 789',
        capacity: 100,
        moviesShowing: allMovies.slice(4).map(m => m._id)
      }
    ];

    await Cinema.insertMany(cinemas);
    console.log('Cinemas seeded successfully');
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.disconnect());