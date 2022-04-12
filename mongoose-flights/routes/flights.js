var express = require('express');
var router = express.Router();
const flightController = require('../controllers/flights');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/index', flightController.index);
router.get('/new', flightController.new);
router.get('/:id', flightController.show);

router.post('/', flightController.create);



module.exports = router;
