/**
 * Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, 
 * subtração, multiplicação e divisão desses valores
 */

const operacoesMatematicas = (val1, val2) => {
  console.log(`${val1} + ${val2} = ${val1 + val2}`);
  console.log(`${val1} - ${val2} = ${val1 - val2}`);
  console.log(`${val1} * ${val2} = ${val1 * val2}`);
  console.log(`${val1} / ${val2} = ${val1 / val2}`);
}

operacoesMatematicas(10, 2);
operacoesMatematicas(5, 2);
