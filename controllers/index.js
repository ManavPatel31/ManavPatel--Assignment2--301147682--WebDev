exports.home=function(req, res, next) {
    res.render('home', {
      title: 'Home',
      userName: req.user ? req.user.username : '' 
     });
    };

exports.about=function(req, res, next) {
    res.render('about', {
      title: 'About',
      userName: req.user ? req.user.username : '' 
     });
  };

exports.project= function(req, res, next) {
    res.render('project', {
      title: 'Project',
      userName: req.user ? req.user.username : '' 
     });
  };

exports.services=function(req, res, next) {
    res.render('services', {
      title: 'Services',
      userName: req.user ? req.user.username : '' 
     });
  };

  exports.contact_me= function(req, res, next) {
    res.render('contact_me', {
      title: 'Contact Me',
      userName: req.user ? req.user.username : '' 
     });
  };