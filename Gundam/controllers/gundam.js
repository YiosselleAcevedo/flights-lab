const GundamModel = require('../models/gundam');
const PartsModel = require('../models/parts');

// Get
function newGundam(req, res) {
  res.render(`gundam/new`)
}
// Post
function create(req, res) {
  console.log(req)
  GundamModel.create(req.body);
  res.redirect('/gundam/index')
}

//Get
function index(req, res) {
  GundamModel.find({}, function (err, gundams) { res.render('gundam/index', { gundams, title: 'All Gundam' }); });
}

//Get
function get(req, res) {
  PartsModel.find({ gundam: req.params.id }, function (err, parts) {
    GundamModel.findById(req.params.id, function (err, gundam) {
      res.render(`gundam/show`, { gundam, title: gundam.name, parts })
    })
  })
}

// Put
function update(req, res) {
  console.log(req.body)
  GundamModel.findByIdAndUpdate(req.body._id, req.body,
    function (err, docs) {
      if (err) {
        console.log(err)
      }
      else {
        res.redirect('/gundam/index')
      }
    })
}

// Delete
function remove(req, res) {
  GundamModel.remove({ id: req.params.id });
}

module.exports = {
  newGundam,
  create,
  index,
  get,
  update,
  remove
}
