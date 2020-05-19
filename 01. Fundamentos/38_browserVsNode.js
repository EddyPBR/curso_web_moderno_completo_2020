/**
 * Qual o seu RUNTIME?
 * Conhecer o lado do cliente (browser) e 
 * o lado do servidor é extremamente importante.
 * 
 * quando de fala em browser normalmente se refere ao 
 * javascript, ja do lado do servidor ao nodeJS 
 * (quando tratamos de javascript).
 * 
 * Runtime é referente ao escopo, frontend ou backend
 * onde se executa o javascript e a absstracao de escopo
 * de onde esta sendo executada.
 **/

let a = 3;

console.log(this.a);
console.log(global.a);

global.b = 123;
console.log(global.b);

this.c = 456;
console.log(this.c);
console.log(module.exports.c);
console.log(module.exports.c === this);

this.d = false;
this.e = 'teste';

// criando uma variavel maluca sem var/let/const
abc = 3 // isso coloca a variavel em escopo global, não faça isso!
console.log(global.abc);

console.log(module.exports);
