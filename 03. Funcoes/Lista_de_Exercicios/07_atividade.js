/**
 * Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. 
 * Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, 
 * sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na 
 * equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. 
 * Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, 
 * mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, 
 * um string com a frase: Delta é negativo”.
 */

// const soNumeros = (string) => {
//   return string.toString().replace(/\D/g, "");
// }

const soNumeros = (numeros) => {
  return numeros.map(numero => parseFloat(numero));
}

const calculaDelta = (ax2, bx , c) => {
  [ax2, bx, c] = soNumeros([ax2, bx , c]);
  const delta = Math.pow(bx, 2) - 4 * ax2 * c;
  return delta;
}

const calculaBhaskara = (ax2, bx , c) => {
  [ax2, bx, c] = soNumeros([ax2, bx , c]);
  const delta = calculaDelta(ax2, bx, c);

  if (delta < 0) return "delta é negativo!";

  const x1 = (-bx + Math.sqrt(delta)) / (2 * ax2);
  const x2 = (-bx - Math.sqrt(delta)) / (2 * ax2);

  return [x1, x2];
}

console.log(calculaBhaskara("1x²", "4x", 0));
console.log(calculaBhaskara("1x²", "4x", 1314));

console.log(calculaBhaskara("4x²", "2x", -6));
console.log(calculaBhaskara("4x²", "2x", 125123));
