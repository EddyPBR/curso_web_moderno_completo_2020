const fs = require('fs');

const caminho = __dirname + "/12_leituraEEscrita.json";

// sincrona ...
const conteudo = fs.readFileSync(caminho, "utf-8");
console.log(conteudo);

// assincrono...
fs.readFile(caminho, 'utf-8', (error, conteudo) => {
  if (error) return "Error: algo deu errado :(";
  const config = JSON.parse(conteudo);
  console.log(`${config.db.host}:${config.db.port}`);
});

const config = require('./12_leituraEEscrita.json');
console.log(config.db); // sim ele executa antes do readFile...

fs.readdir(__dirname, (error, arquivos) => {
  console.log('Conteúdo da pasta...');
  console.log(arquivos);
})
