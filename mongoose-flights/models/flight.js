/**
 * This file is for Mongooes
 */

 const mongoose = require('mongoose');
 // optional shortcut to the mongoose.Schema class
 const Schema = mongoose.Schema;

 const destinationSchema = new Schema({
  airport: {
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
  },
  arrival: {
    type: Date
  }
});



 const flightSchema = new Schema({
   airline: {
     type: String,
     enum: ['American', 'Delta', 'Southwest', 'United']
   },
   airport: {
     type: String,
     enum: ['ATL', 'DFW', 'DEN', 'LAX', 'SAN']
    },
   flightNo: {
     type: Number,
     min: 10,
     max: 9999
   },
   departs: {
     type: Date
   },
   destinations:[ destinationSchema ]

});

 module.exports = mongoose.model('Flight', flightSchema);

