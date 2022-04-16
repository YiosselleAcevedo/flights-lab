const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const partsSchema = new Schema({
  name: {
    type: String
  },
  bodyPart: {
    type: String,
    enum: ['Leg', 'Hand', 'Torso', 'Head']
  },
  grade: {
    type: String,
    enum: ['Standard', 'High', 'Metal', 'Perfect']
  },
  price: {
    type: Number,
    min: 0
  },
  gundam: {
    type: Schema.Types.ObjectId, ref: 'Gundam'
  }
});

module.exports = mongoose.model('Parts', partsSchema);