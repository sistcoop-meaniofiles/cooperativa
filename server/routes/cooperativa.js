'use strict';

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Cooperativa, app, auth, database) {

  app.get('/cooperativa/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/cooperativa/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/cooperativa/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/cooperativa/example/render', function(req, res, next) {
    Cooperativa.render('index', {
      package: 'cooperativa'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
