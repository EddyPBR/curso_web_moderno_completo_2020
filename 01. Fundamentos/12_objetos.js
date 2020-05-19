const prod1 = {}
prod1.nome = "Celular Ultra Mega";
prod1.preco = 4998.90;
prod1['DescontoLegal'] = 0.40; // não colocar nomes com espaço

console.log(prod1);

const prod2 = {
  nome: 'Camisa Polo',
  preco: 79.90,
  obj: {
    blabla: 1,
    obj: {
      blabla: 2
    }
  }
}

console.log(prod2);

/**
 * JSON não é a mesma coisa que um objeto,
 * mas é o formato textual de um.
 */

const prod3 = {
  nome: 'Camisa Polo',
  preco: 79.70
}

/**
 * isso seria o JSON do prod3:
 * "{'nome': 'Camisa Polo', 'preco': 79.90}"
 */
