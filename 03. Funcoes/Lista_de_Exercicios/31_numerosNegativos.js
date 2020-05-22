/**
 * Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos 
 * há nesse vetor e imprime a quantidade no console.
 */

const vetorDeTeste = [];
for(let i = -50; i <= 50; i++){
  vetorDeTeste.push(i);
}

let contador = 0;
vetorDeTeste.forEach(numero => {
  if (numero < 0) contador++;
});

console.log(`O vetor possui ${contador} números negativos.`);
