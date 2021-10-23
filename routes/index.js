// This page contains the routes for pages Home,About,Project and Services

var express = require('express');
var router = express.Router();

var indexController=require('../controllers/index');

/* GET home page. */
router.get('/', indexController.home);

/* GET about page available on http://localhost:3000/about. */
router.get('/about', indexController.about);

/* GET Project page. */
router.get('/project',indexController.project);

/* GET services page. */
router.get('/services', indexController.services);

/* GET Contact-Me page. */
router.get('/contact-me', indexController.contact_me);

module.exports = router;
