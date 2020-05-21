/**
 * Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta 
 * e que possua três casos: 
 * Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. 
 * Caso kiwi, retorne: “Estamos com escassez de kiwis”. 
 * Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. 
 * Teste com estas três opções. Crie também um 
 * Caso default, que retornará uma mensagem de erro no console.
 */

const temFruta = (nome) => {
  switch(nome) {
    case "maçã":
      return "Não vendemos esta fruta aqui";
    case "kiwi":
      return "Estamos com escassez de kiwis";
    case "melancia":
      return "Aqui está, são 3 reais o quilo";
    default:
      return "Error: valor inválido!";
  }
}

console.log(temFruta('maçã'));
console.log(temFruta('kiwi'));
console.log(temFruta('melancia'));
console.log(temFruta('alcatra'));
