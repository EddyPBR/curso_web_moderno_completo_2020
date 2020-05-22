/**
 * Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
 */

let valores = [10, 5, 9, 6, 8, 7];

let quantidade = valores.length;
let soma = valores.reduce( (val1, val2) => val1 + val2);

console.log( (soma / quantidade).toFixed(2));
