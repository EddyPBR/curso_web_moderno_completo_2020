/**
 * Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte 
 * quantos números deste vetor estão no intervalo [10,20] 
 * (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora 
 * do intervalo, escrevendo estas informações.
 */

const vetorDeTeste = [];
for(let i = 1; i <= 100; i++){
  vetorDeTeste.push(i);
}

const entreDezEVinte = (numeros) => {
  let entre = 0;
  let fora = 0;

  numeros.forEach(numero => numero >= 10 && numero <= 20 ? entre += 1 : fora += 1);
  return([entre, fora]);
}

console.log(entreDezEVinte(vetorDeTeste));
