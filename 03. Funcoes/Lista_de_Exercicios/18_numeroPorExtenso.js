/**
 * Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. 
 * Use o comando switch. Crie um case default que escreva ‘Número fora do intervalo.’
 */

const numeroPorExtenso = (numero) => {
  switch(numero) {
    case 10:
      return "dez";
    case 9:
      return "nove";
    case 8:
      return "oito";
    case 7:
      return "sete";
    case 6:
      return "seis";
    case 5:
      return "cinco";
    case 4:
      return "quatro";
    case 3:
      return "três";
    case 2:
      return "dois";
    case 1:
      return "um";
    case 0:
      return "zero";
    default:
      return "valor inválido!"
  }
}

console.log( numeroPorExtenso(10) );
console.log( numeroPorExtenso(9) );
console.log( numeroPorExtenso(8) );
console.log( numeroPorExtenso(7) );
console.log( numeroPorExtenso(6) );
console.log( numeroPorExtenso(5) );
console.log( numeroPorExtenso(4) );
console.log( numeroPorExtenso(3) );
console.log( numeroPorExtenso(2) );
console.log( numeroPorExtenso(1) );
console.log( numeroPorExtenso(0) );
console.log( numeroPorExtenso(11) );
