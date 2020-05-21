/**
 * Crie uma função que verifica se um número inteiro passado como parêmetro é divisível 
 * por 3 e retorne true ou false.
 */

const divisivelPorTres = (num) => {
  if (num % 3 === 0) return true;
  return false;
}

console.log(divisivelPorTres(3));
console.log(divisivelPorTres(2));
console.log(divisivelPorTres(150));
