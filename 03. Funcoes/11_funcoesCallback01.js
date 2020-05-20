const fabricantes = ["Mercedes", "Audi", "BMW"];

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`);
}

fabricantes.forEach(imprimir);
fabricantes.forEach( (fabricante) => console.log(fabricante) );

/**
 * Callback nada mais é que uma função que será chamada
 * quando um evento acontecer. Qual o evento que ocorreu
 * neste cenário? o Loop que quando encontra um novo elemento
 * ele dispara a função que foi chamada.
 */
