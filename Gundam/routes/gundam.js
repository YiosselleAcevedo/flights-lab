var express = require('express');
var router = express.Router();
const gundamController = require('../controllers/gundam');

router.get('/', gundamController.index);
router.get('/new', gundamController.newGundam);
router.get('/:id', gundamController.get);

router.post('/', gundamController.create);
router.post('/:id', gundamController.update);
router.delete('/:id', gundamController.remove);

module.exports = router;