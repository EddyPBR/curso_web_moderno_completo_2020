/**
 * Um array em javascript na verdade é um objeto, 
 * porém ainda assim funciona da maneira tradicional
 * de arrays como em outras linguagens.
 */

console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana');
console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana'];
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // não existe, retorna undefined;

aprovados[3] = 'Paulo'; // não é recomendado adicionar elementos a um array desta maneira, mas é recomendada para alterar dados
aprovados.push('Abia'); // esta é a maneira recomendada de adicionar elementos
console.log(aprovados.length);

aprovados[9] = 'Rafael';
console.log(aprovados.length);
console.log(aprovados[8] === undefined);

console.log(aprovados);
aprovados.sort(); // sim, altera o array;
console.log(aprovados);

delete aprovados[1]; // altera apenas o valor, ficando com o vaor undefined
console.log(aprovados[1]);

let aprovados =['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 2); // a partir do índice 1 exclue dois elementos (indices 1 e 2 neste caso);
console.log(aprovados);

let aprovados =['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 2, 'Elemento1', 'Elemento2'); // a partir do índice 1 exclue dois elementos e adiciona 2 novos elementos;
console.log(aprovados);

let aprovados =['Bia', 'Carlos', 'Ana'];
aprovados.splice(1, 0, 'Elemento1', 'Elemento2'); // a partir do índice 1 adiciona 2 novos elementos;
console.log(aprovados);
