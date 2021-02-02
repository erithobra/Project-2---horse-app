const express = require("express");
const router = express.Router();
const ctrl = require('../controllers');


router.get('/', ctrl.trainers.index);
router.get('/profile/:index', ctrl.trainers.renderProfile);
router.post('/login', ctrl.trainers.login);
router.get('/login', ctrl.trainers.renderLogin);
router.get('/signup', ctrl.trainers.renderSignup);
router.post('/signup', ctrl.trainers.signup);


module.exports = router;