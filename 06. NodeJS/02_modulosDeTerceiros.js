/**
 * yarn add lodash
 * npm i lodash
 * 
 * yarn add -D nodemon
 * npm i -G nodemon
 * 
 * yarn nodemon 02_modulosDeTerceiros.js
 * nodemon 02_modulosDeTerceiros.js
 */

const _ = require('lodash');
setInterval(() => console.log(_.random(1, 10)), 2000);
