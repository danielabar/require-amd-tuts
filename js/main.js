// bootstrap: No need to specify .js file extensions when declaring dependencies
// All paths in here are relative to location of main.js

// Set some configuration options: path aliases
// jquery registers itself as 'jquery' in AMD, if we want to put it in a different folder, need this config
// require.config({
//   paths: {
//     'jquery': 'libs/jquery'
//   }
// });

// Instead of hosting jquery ourselves, can reference it from CDN
// Notice we don't need the '.js' file extensions, require will add it

// To make things cleaner, config can live in a separte file
// How to use modules that don't expose themselves as AMD?
// ISSUE: backbone DEPENDS on underscore, can't simply list it
// SOLN: usejs plugin (https://github.com/tbranyen/use-amd)
// require.config({
//   paths: {
//     'use': 'libs/use',
//     'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min',
//     'underscore': 'http://documentcloud.github.io/underscore/underscore',
//     'backbone': 'http://documentcloud.github.io/backbone/backbone'
//   },
//   use: {
//     backbone: {
//       deps: ['underscore', 'jquery'],
//       attach: 'Backbone'
//     }
//   }
// });

// In this case, whatever is returned from modules/person is ALIASED as person
// Note backbone is being defined with its dependencies via use.js plugin, so we need "use!"
// require(['use!backbone', 'modules/person'], function(Backbone, person) {
//   console.log('Inside main module');
//   console.dir(Backbone);
//   console.log(person.first + ' ' + person.last + ' likes: ' + person.favorites);
// });

require(['modules/movie'], function(Movie) {

  var movie = new Movie.Model({
    release: 1996,
    title: 'Contact'
  });

  var movieView = new Movie.View({
    model: movie
  });

  $('body').append(movieView.el);
});