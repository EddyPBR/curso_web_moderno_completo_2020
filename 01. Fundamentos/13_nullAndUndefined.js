/**
 * Quando é declarada uma variavel, o que a variavel armazena de fato,
 * é o ENDEREÇO NA MEMÓRIA do computador e neste endereço é onde se
 * tem os valores.
 */

/**
 * null valor primitivo que representa a ausência intencional de um valor de objeto. 
 * Exemplo: é necessária "zerar" uma variável x...  x = null;
 * 
 * undefined valor primitivo utilizado quando uma variável não teve valor atribuído.
 * isso deve ser evitado.
 */

let valor;
console.log(valor);
// console.log(valor2); // error: não foi definido

valor = null;
console.log(valor);

// console.log(valor.toString()) // error

const produto = {};
console.log(produto.preco);
console.log(produto)

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco);
// delete produto.preco;
console.log(produto);

produto.preco = null // sem preço
console.log(!!produto.preco);
console.log(produto);
