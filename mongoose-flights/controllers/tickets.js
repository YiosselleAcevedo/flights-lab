const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  updateTicket,
  new: newTicket
}

function newTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    res.render('tickets/new', {
      flight
    })
    console.log(flight)
  })
}



function updateTicket(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    req.body.flight = req.params.id
    Ticket.create(req.body, function(err, ticket) {
      res.redirect(`/flights/${req.params.id}`);
    });
  })

}