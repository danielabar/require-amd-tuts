# AMD and RequireJS

Tutorial notes and code from [Tuts+ Premium](https://tutsplus.com) tutorial [The Essentials of AMD and RequireJS](https://tutsplus.com/tutorial/the-essentials-of-amd-and-requirejs/)

## Summaary

* index.html only includes a SINGLE script file - config.js

* config.js specifies

  * main dependency

  * paths to find external dependencies

  * optional 'use' plugin config for using external modules that have other dependencies or do not register themselves as AMD modules

* all modules simply require the dependencies they need

* object returned by module becomes its public API