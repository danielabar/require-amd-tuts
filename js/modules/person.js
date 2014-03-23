/*
*   AMD: Asynchronous Module Definition
*   Start with 'define' function, which gets passed 3 parameters
*   1. Module ID, this is optional, if not provided, the current file name is used as the module id
*   2. Array of dependencies (i.e other modules this module depends on),
*      if there are no dependencies, then leave this out
*   3. Function - this code will get executed when this module is loaded
*/

// Use jquery
define(['jquery', 'modules/stuff'], function($, stuff) {
  console.log('Inside Person Module');
  console.dir($);
  return {
    first: 'Jeffrey',
    last: 'Way',
    favorites: stuff.likes.join(' ')
  };
})