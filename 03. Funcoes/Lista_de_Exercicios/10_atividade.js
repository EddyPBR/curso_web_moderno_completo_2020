/**
 * Crie uma função que verifica se um número inteiro passado como parêmetro é divisível 
 * por 3 e retorne true ou false.
 */

const atividade10 = (num) => {
  if (num % 3 === 0) return true;
  return false;
}

console.log(atividade10(3));
console.log(atividade10(2));
console.log(atividade10(150));
