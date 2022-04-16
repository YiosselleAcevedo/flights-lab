const PartsModel = require('../models/parts');
const GundamModel = require('../models/gundam');

// Get
function newPart(req, res) {
  GundamModel.find({}, function(err, gundams) {
    res.render(`parts/new`, { gundams, })
  })
}
// Post
function create(req, res) {
  PartsModel.create(req.body, function(err){
    res.redirect('/parts')
  });
}

// Get
function index(req, res) {
  PartsModel.find({}, function(err, parts) { res.render(`parts/index`, { parts })})
}

// Get
function get(req, res) {
  PartsModel.findById(req.params.id, function(err, part) {
    GundamModel.find({}, function(err, gundams) {
      res.render(`parts/show`, { gundams, part })
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
        res.redirect('/parts')
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
