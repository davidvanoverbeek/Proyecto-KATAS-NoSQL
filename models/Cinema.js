const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cinemaSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String },
  capacity: { type: Number },
  moviesShowing: [{ type: Schema.Types.ObjectId, ref: 'Movie' }]
}, { timestamps: true });

module.exports = mongoose.model('Cinema', cinemaSchema);