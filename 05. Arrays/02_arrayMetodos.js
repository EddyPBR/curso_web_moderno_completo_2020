const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop(); // remove o ultimo
console.log(pilotos);

pilotos.push('Verstappen'); // adiciona ao final do array
console.log(pilotos);

pilotos.shift() // remove o primeiro
console.log(pilotos);

pilotos.unshift('Hamilton'); // adiciona ao inicio do array
console.log(pilotos);

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// remover
pilotos.splice(3, 1);
console.log(pilotos);

const algunsPilotos1 = pilotos.slice(2) // retorna um novo array
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // indice 1 .. 4-1
console.log(algunsPilotos2);
