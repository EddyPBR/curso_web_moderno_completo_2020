/**
 * Construa uma função que receba como parâmetros as alturas e as taxas de crescimento 
 * anuais de duas crianças e calcule se existe uma criança menor, caso exista se a criança 
 * menor ultrapassará a maior e em quantos anos isso acontecerá. Utilize centímetros para 
 * as unidades de medida.
 */

const comparaCrescimento = (crianca1, crianca2) => {
  let [altura1, taxa1] = crianca1;
  let [altura2, taxa2] = crianca2;
  taxa1 = taxa1 / 100;
  taxa2 = taxa2/ 100;

  if(altura1 > altura2) {
    console.log("Criança 01 é maior!");
    if (taxa1 >= taxa2) return console.log("A criança 01 sempre sera maior!");
  } else if(altura1 < altura2) {
    console.log("Criança 02 é maior!");
    if (taxa1 <= taxa2) return console.log("A criança 02 sempre sera maior!");
  } else {
    console.log("As crianças tem alturas iguais");
    if (taxa1 === taxa2) return console.log("As crianças sempre terão alturas iguais uma a outra");
  }
  
  let anos = 0;
  if (taxa1 > taxa2) {
    while(altura1 < altura2) {
      altura1 += altura1 * taxa1;
      altura2 += altura2 * taxa2;
      anos += 1;
    }
    console.log(`A criança 01 será maior em ${anos+1} ano(s).`);
  } else {
    while(altura1 > altura2) {
      altura1 += altura1 * taxa1;
      altura2 += altura2 * taxa2;
      anos += 1;
    }
    console.log(`A criança 02 será maior em ${anos+1} ano(s).`);
  }
}

comparaCrescimento([1.00, 3], [1.00, 3]);
comparaCrescimento([1.00, 2], [1.00, 4]);
comparaCrescimento([1.00, 4], [1.10, 2]);
comparaCrescimento([1.10, 2], [1.00, 4]);
comparaCrescimento([1.10, 4], [1.00, 4]);
comparaCrescimento([1.00, 4], [1.00, 4]);
