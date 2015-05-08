'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Cooperativa = new Module('cooperativa');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Cooperativa.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Cooperativa.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Cooperativa.menus.add({
    title: 'Cooperativa',
    link: 'cooperativa.app',
    roles: ['all'],
    menu: 'main'
  });
  
  //Cooperativa.aggregateAsset('css', 'cooperativa.css');

  return Cooperativa;
});
