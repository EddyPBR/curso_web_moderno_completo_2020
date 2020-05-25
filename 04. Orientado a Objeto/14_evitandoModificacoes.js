// Object.preventExtensions | impede criar novos atributos
const produto = Object.preventExtensions({
  nome: 'Qualquer', preco: 1.99, tag: 'promoção'
});
console.log('Extensível:', Object.isExtensible(produto));

produto.nome = 'Borracha';
produto.descricao = 'Borracha escolar branca';
delete produto.tag;
console.log(produto);

// Object.seal | impede adicao/exclusao de atributos, porém pode alterar os valores;
const pessoa = { nome: 'Juliana', idade:35 };
Object.seal(pessoa);
console.log('Selado', Object.isSealed(pessoa));

pessoa.sobrenome = 'Silva';
delete pessoa.nome;
pessoa.idade = 29,
console.log(pessoa);

// Object.freeze | impede adicao/exclusao/alteracao de atributos e seus valores;
