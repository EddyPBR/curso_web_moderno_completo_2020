/**
 * Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
 * Equilátero: Os três lados são iguais. 
 * Isósceles: Dois lados iguais. 
 * Escaleno: Todos os lados são diferentes.
 * Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua 
 * classificação quanto ao tamanho de seus lados. 
 * (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).
 */

const tiposDeTriangulos = (a, b, c) => {
  if(a === b && a === c) return("Equilátero");
  if(a === b || a === c || b === c) return("Isósceles");
  if(a !== b && a !== c && b !== c) return("Escaleno");
}

console.log(tiposDeTriangulos(1, 1, 1));
console.log(tiposDeTriangulos(1, 1, 2));
console.log(tiposDeTriangulos(1, 2, 2));
console.log(tiposDeTriangulos(1, 2, 2));
console.log(tiposDeTriangulos(1, 2, 3));
console.log(tiposDeTriangulos(3, 2, 1));
