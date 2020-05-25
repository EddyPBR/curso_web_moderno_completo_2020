const carrinho =  [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "kit de Lápis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
];

// Retorna um array apenas com os preços;
const pegarPreco = (element) => JSON.parse(element).preco;
const paraDinheiro = (element) => `R${parseFloat(element).toFixed(2).replace('.', ',')}`;

let resultado = carrinho.map(pegarPreco).map(paraDinheiro);
console.log(resultado);
