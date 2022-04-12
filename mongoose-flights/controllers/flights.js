const Flight = require('../models/flight');
const Ticket  = require('../models/ticket')
module.exports = {
  new: newFlight,
  create,
  index,
  show
}

function newFlight(req, res) {
  res.render('flights/new');
}

function create(req, res) {
  console.log(req.body);
  Flight.create(req.body);
  res.redirect('/flights/index')
}

function index(req, res) {
  Flight.find({}, function(err, flights) {
    res.render('flights/index', {
      flights,
      title: 'All Flights'
    });
  });

}

function show(req, res) {
	Flight.findById(req.params.id, function(err, flight) {
		Ticket.find({ flight: flight._id }, function(err, tickets) {
			res.render('flights/show', {
				flight,
				tickets,
        title: 'hello'
			});
      console.log(tickets)
		});
	});
}