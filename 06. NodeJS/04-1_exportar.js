console.log(module.exports === this);
console.log(module.exports === exports);

this.a = 1;
exports.b = 2;
module.exports.c = 3;

/**
 * this e exports são duas referencias para o objeto em que module.exports aponta.
 */

exports = null;
console.log(module.exports);

exports = {
  nome: 'Teste'
}

console.log(module.exports);

module.exports = {
  publico: true
} // maneira correta :) 
