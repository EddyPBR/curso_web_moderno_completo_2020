/**
 * Utilizando a estrutura do Switch faça um programa que simule uma calculadora básica. 
 * O programa recebe como parâmetros dois valores numéricos e uma string referente à operação 
 * e a realize com os valores numéricos na ordem que foram inseridos. 
 * 
 * Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e 3. 
 * Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. 
 * Crie um caso default para operações inválidas.
 */

const calculadora = (num1, operacao, num2) => {
  switch(operacao) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return "operação inválida!";
  }
}

console.log(calculadora(2, '+', 3));
console.log(calculadora(2, '-', 3));
console.log(calculadora(2, '*', 3));
console.log(calculadora(6, '/', 3));
console.log(calculadora(2, 'a', 3));
