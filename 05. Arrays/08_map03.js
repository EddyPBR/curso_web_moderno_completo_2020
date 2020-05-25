// Implementando o map()
Array.prototype.map2 = function(callback) {
  const newArray = [];
  for(let i=0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this));
  }
  return newArray;
}

const carrinho =  [
  '{ "nome": "Borracha", "preco": 3.45 }',
  '{ "nome": "Caderno", "preco": 13.90 }',
  '{ "nome": "kit de Lápis", "preco": 41.22 }',
  '{ "nome": "Caneta", "preco": 7.50 }',
];

// Retorna um array apenas com os preços;
const pegarPreco = (element) => JSON.parse(element).preco;
const paraDinheiro = (element) => `R${parseFloat(element).toFixed(2).replace('.', ',')}`;

let resultado = carrinho.map2(pegarPreco).map2(paraDinheiro);
console.log(resultado);
