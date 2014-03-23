require.config({
  deps: ['main'],
  paths: {
    'use': 'libs/use',
    'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min',
    'underscore': 'http://documentcloud.github.io/underscore/underscore',
    'backbone': 'http://documentcloud.github.io/backbone/backbone'
  },
  use: {
    backbone: {
      deps: ['underscore', 'jquery'],
      attach: 'Backbone'
    }
  }
});