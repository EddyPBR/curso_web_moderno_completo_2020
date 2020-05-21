/**
 * Crie uma função que irá receber dois valores, o dividendo e o divisor. 
 * A função deverá imprimir o resultado e o resto da divisão destes dois valores
 */

const divisaoEResto = (dividendo, divisor) => {
  console.log(`${dividendo} / ${divisor} = ${dividendo / divisor}`);
  console.log(`${dividendo} % ${divisor} = ${dividendo % divisor}`);
}

divisaoEResto(10, 2);
divisaoEResto(10, 5);
divisaoEResto(9, 3);
divisaoEResto(5, 2);
