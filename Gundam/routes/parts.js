var express = require('express');
var router = express.Router();
const partsController = require('../controllers/parts');

router.get('/', partsController.index);
router.get('/new', partsController.newPart);
router.get('/:id', partsController.get);

router.post('/', partsController.create);
router.post('/:id', partsController.update);
router.delete('/:id', partsController.remove);

module.exports = router;