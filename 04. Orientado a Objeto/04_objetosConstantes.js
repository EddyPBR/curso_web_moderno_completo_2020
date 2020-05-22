// pessoa -> 123 -> {...}
// a const aponta para um endero que contem o objeto.

const pessoa = { nome: 'João' };
pessoa.nome = 'Pedro';
console.log(pessoa);

/**
 * Então o que acontece, a constante pessoa aponta para o endereco de objeto,
 * o objeto pode ser alterado, mas a constante pessoa não pode parar de apontar
 * para objeto.
 */ 

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }; // erro

Object.freeze(pessoa); // não permite o objeto ser alterado
pessoa.nome = 'Maria'; // tentando alterar
pessoa.end = 'Rua ABC'; // tentando adicionar um atributo
delete pessoa.nome // tentando deletar um atributo
console.log(pessoa.nome); // imutavel!

// criando um objeto constante
const pessoaConstante = Object.freeze({ nome: 'João' });
console.log(pessoaConstante);
