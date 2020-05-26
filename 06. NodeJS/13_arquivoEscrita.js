const fs = require('fs');
const produto = {
  nome: 'Celular',
  preco: 1249.99,
  desconto: 0.15
}

fs.writeFile(__dirname + '/13_arquivoGerado.json', JSON.stringify(produto), error => {
  console.log(error || "Arquivo Salvo!");
});
