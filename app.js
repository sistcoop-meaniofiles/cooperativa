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
  
  Cooperativa.aggregateAsset('css', 'cooperativa.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Cooperativa.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Cooperativa.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Cooperativa.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Cooperativa;
});
