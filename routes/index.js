// This page contains the routes for pages Home,About,Project and Services

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
    title: 'Home',
    userName: 'Manav Patel'
   });
});

/* GET about page available on http://localhost:3000/about. */
router.get('/about', function(req, res, next) {
  res.render('about', {
    title: 'About',
    userName: 'Manav Patel'
   });
});

/* GET Project page. */
router.get('/project', function(req, res, next) {
  res.render('project', {
    title: 'Project',
    userName: 'Manav Patel'
   });
});

/* GET services page. */
router.get('/services', function(req, res, next) {
  res.render('services', {
    title: 'Services',
    userName: 'Manav Patel'
   });
});

/* GET Contact-Me page. */
router.get('/contact-me', function(req, res, next) {
  res.render('contact_me', {
    title: 'Contact Me',
    userName: 'Manav Patel'
   });
});

module.exports = router;
