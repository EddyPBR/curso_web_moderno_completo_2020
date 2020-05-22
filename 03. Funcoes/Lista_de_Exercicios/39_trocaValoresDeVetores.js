/**
 * Crie uma função que receba dois vetores de igual tamanho e troque seus elementos 
 * de modo que o primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa 
 * e assim sucessivamente. Faça a troca sem utilizar uma variável auxiliar
 */

let vetorA = [0, 1, 2, 3, 4];
let vetorB = [5, 6, 7, 8, 9];

const trocaValores = (lista1, lista2) => {
  const tamanho = lista1.length;

  lista1 = lista1.concat(lista2);
  lista2 = [...lista1];

  lista1.splice(0, tamanho)
  lista2.splice(tamanho, lista2.length);

  console.log(lista1, lista2)
}

trocaValores(vetorA, vetorB);
