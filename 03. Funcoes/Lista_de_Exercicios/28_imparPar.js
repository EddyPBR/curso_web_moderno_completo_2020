/**
 * Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
 */

const vetorDeTeste = [];
for(let i = 1; i <= 100; i++){
  vetorDeTeste.push(i);
}

contadorPar = 0;
contadorImpar = 0;

vetorDeTeste.forEach(numero => {
  numero % 2 === 0 ? contadorPar++ : contadorImpar++;
});

console.log(contadorPar);
console.log(contadorImpar);
