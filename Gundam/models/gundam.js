const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gundamSchema = new Schema({
  name: {
    type: String
  },
  grades: {
    type: String,
    enum: ['Standard', 'High', 'Metal', 'Perfect']
  },
  rating: {
    type: String,
    enum: ['1/144', '1/100', '1/60', '1/48', '1/35']
  },
  gundamtype: {
    type: String,
    enum: ['EXIA', 'RX78', 'UNICORN', 'GOD', 'ASTRAY RED']
  },
});

module.exports = mongoose.model('Gundam', gundamSchema);

