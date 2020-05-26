const moduloA = require('../../../01-1_moduloA');
console.log(moduloA.ola);

const c = require('./pastaC/');
console.log(c);

const http = require('http');
http.createServer( (request, response) => {
    response.write('Bom dia!');
    response.end()
}).listen(3000);
