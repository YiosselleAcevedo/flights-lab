const Flight = require('../models/flight');

module.exports = {
  show: showDetails,
  create: createDes
}

function showDetails(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('flights/show', {
      flight,
      title: 'Flight Info'
    });
  });
}

function createDes(req, res) {
  console.log(req.body);
  Flight.findById(req.params.id, function(err, flight) {
    flight.destinations.push(req.body);
    flight.save(function(err) {
      console.log(err)
      res.redirect(`/flights/${flight._id}`);
      console.log(flight);
    })
  })
}