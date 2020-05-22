const pessoa = {
  nome: 'Rebeca',
  idade: 2,
  peso: 13
}

console.log(Object.keys(pessoa));
console.log(Object.values(pessoa));
console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(element => {
  console.log(`${element[0]}: ${element[1]}`);
});

Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(`${chave}: ${valor}`);
});

// ambos acima são a mesma coisa

Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true, // mostrar ou não
  writable: false, // se pode ser alterada
  value: '01/01/2020' // valor
});

console.log(pessoa.dataNascimento);
pessoa.dataNascimento = '01/01/2019'; // nao altera
console.log(pessoa.dataNascimento);

// Object.assign (ES 2015)
const dest = { a: 1 };
const o1 = { b: 2 };
const o2 = { c:3, a:4 };
const obj = Object.assign(dest, o1, o2);
console.log(obj);

Object.freeze(obj);
obj.c = 1234;
console.log(obj);
