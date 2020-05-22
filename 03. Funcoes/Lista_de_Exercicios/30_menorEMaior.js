/**
 * Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor 
 * valor dentro do vetor.
 */

const vetorDeTeste = [];
for(let i = 50; i <= 100; i++){
  vetorDeTeste.push(i);
}

const menorEMaior = (numeros) => {
  let maior = null;
  let menor = null;
  numeros.forEach(numero => {
    if (numero > maior || maior === null ) maior = numero;
    if (numero < menor || menor === null ) menor = numero;
  });
  return [maior, menor];
}

console.log(menorEMaior(vetorDeTeste));
