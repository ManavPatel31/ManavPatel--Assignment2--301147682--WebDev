// This page contains the routes for pages Contact-Me
var express = require('express');
let userController= require('../controllers/user');
var router = express.Router();
let passport = require('passport');

  
  /* GET Contact-Me page. */
  router.get('/contact-me', function(req, res, next) {
    res.render('users', {
      title: 'Contact Me',
      userName: 'Manav Patel'
     });
  });

  router.get('/signup', userController.renderSignup);
  router.post('/signup', userController.signup);

  router.get('/signin',userController.renderSignin);
  router.post('/signin', userController.signin);

  router.get('/signout',userController.signout);

module.exports = router;