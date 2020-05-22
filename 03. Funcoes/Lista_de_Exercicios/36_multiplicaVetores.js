/**
 * Crie duas funções que recebem dois parâmetros, 
 * um vetor com apenas valores numéricos e um número inteiro. 
 * 
 * Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
 * elemento pelo número passado como parâmetro. 
 * A segunda função fará o mesmo da primeira se e somente se o valor do elemento for maior que 5.
 */

const multiplicaVetor = (vetor, num) => vetor.map( (val) => val * num );
const multiplicaVetorCondicional = (vetor, num) => vetor.map((val) => val > 5 ? val * num : val);

console.log(multiplicaVetor([4,5,6], 2));
console.log(multiplicaVetorCondicional([4,5,6], 2));
