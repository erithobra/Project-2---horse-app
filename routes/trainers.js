const express = require("express");
const router = express.Router();
const ctrl = require('../controllers');


router.get('/', ctrl.trainers.index);
router.get('/:index', ctrl.trainers.renderProfile);

module.exports = router;