require('./08-1_global');

console.log(MinhaApp.saudacao());

MinhaApp.nome = 'Eita!'; // recomendado usar o freeze para evitar isso.
console.log(MinhaApp.nome);
