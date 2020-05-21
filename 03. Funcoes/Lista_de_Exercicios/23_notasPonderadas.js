/**
 * Escreva um algoritmo que leia o código de um aluno e suas três notas. 
 * Calcule a média ponderada do aluno, 
 * considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. 
 * Mostre o código do aluno, 
 * suas três notas, a média calculada e 
 * uma mensagem "APROVADO" se a média for maior ou igual a 5 e
 * "REPROVADO" se a média for menor que 5. 
 * Repita a operação até que o código lido seja negativo.
 */

const imprimeMensagem = (cod, n1, n2, n3) => {
  let notas = [n1, n2, n3];
  notas.sort().reverse();

  let media = notas[0]*0.4 + notas[1]*0.3 + notas[2]*0.3;
  console.log(`Cod. ${cod}\nNota 01: ${n1}\nNota 02: ${n2}\nNota 03: ${n3}\nMédia Final: ${media}\nO aluno está ${media >= 5 ? "APROVADO" : "REPROVADO" }`);
}

imprimeMensagem(123, 2.8, 6, 3.5);
imprimeMensagem(123, 2.8, 10, 3.5);
