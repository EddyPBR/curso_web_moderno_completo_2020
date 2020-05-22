/**
 * Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma 
 * de modo que de 0,0 a 4,9 seja atribuído o conceito D, 
 * de 5,0 a 6,9 seja atribuído o conceito C, 
 * de 7,0 a 8,9 o conceito B e 
 * de 9,0 a 10,0 o conceito A.
 */

const determinaConceito = (notas) => {
  notas.forEach( nota => {
    if (nota >= 9 && nota <= 10 ) {
      console.log("conceito A");
    } else if ( nota >= 7 && nota < 9) {
      console.log("conceito B");
    } else if ( nota >= 5 && nota < 7) {
      console.log("conceito C");
    } else if ( nota >= 0 && nota < 5) {
      console.log("conceito D");
    } else {
      console.log("Valor da nota é inválido");
    }
  });
}
const notas = [10.0, 9.0, 8.9, 7.0, 6.9, 5.0, 4.9, 0, -1.0, 11];
determinaConceito(notas);
