/**
 * Faça um algoritmo que calcule o fatorial de um número;
 */

const calculaFatorial = (num) => num == 0 ? 1 : num * calculaFatorial(num -1);

console.log(calculaFatorial(0));
console.log(calculaFatorial(1));
console.log(calculaFatorial(2));
console.log(calculaFatorial(3));
console.log(calculaFatorial(4));
console.log(calculaFatorial(5));
