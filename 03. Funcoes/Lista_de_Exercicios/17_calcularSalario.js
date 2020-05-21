/**
 * Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, 
 * de acordo com a tabela abaixo:
 * 
 *  Plano           Aumento
 *  A               10%
 *  B               15%
 *  C               20%
 * 
 * Faça uma função que leia o plano de trabalho e o salário atual de um funcionário 
 * e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default 
 * que indique que o plano é inválido.
 */

const calcularReajuste = (plano, salario) => {
  switch(plano) {
    case "A":
      return salario + (salario * 0.10);
    case "B":
      return salario + (salario * 0.15);
    case "C":
      return salario + (salario * 0.20);
    default:
      return "plano inválido!";
  }
}

console.log(calcularReajuste('A', 1000));
console.log(calcularReajuste('B', 1000));
console.log(calcularReajuste('C', 1000));
console.log(calcularReajuste('D', 1000));
