const PartsModel = require('../models/parts');

// Get
function newPart(req, res) {
  GundamModel.findById({}, function(err, gundams) {
    res.render(`parts/new`, { gundams, })
  })
}
// Post
function create(req, res) {
  PartsModel.create(req.body);
  res.redirect('/parts/index')
}

// Get
function index(req, res) {
  PartsModel.find({}, function(err, parts) { res.render(`parts/index`, { parts })})
}

// Get
function get(req, res) {
  PartModel.findById(req.params.id, function(err, parts) {
    GundamModel.findById({}, function(err, gundams) {
      res.render(`parts/show`, { gundams, parts })
    })})
}
// Put
function update(req, res) {
  PartsModel.findByIdAndUpdate(req.body._id, req.body,
    function (err, docs) {
      if (err) {
        console.log(err)
      }
      else {
        res.redirect('/parts/index')
      }
    })
}
// Delete
function remove(req, res) {
  PartsModel.remove({ id: req.params.id });
}

module.exports = {
  newPart,
  create,
  index,
  get,
  update,
  remove
}
