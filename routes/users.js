// This page contains the routes for pages Contact-Me


var express = require('express');
var router = express.Router();

  
  /* GET Contact-Me page. */
  router.get('/contact-me', function(req, res, next) {
    res.render('users', {
      title: 'Contact Me',
      userName: 'Manav Patel'
     });
  });

module.exports = router;