const express = require("express");
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.horses.index);
// router.get('/new', ctrl.horses.renderNew);
router.get('/:index', ctrl.horses.show);



module.exports = router;