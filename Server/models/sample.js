const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sampleSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
});

export default new mongoose.model('Sample', sampleSchema);
