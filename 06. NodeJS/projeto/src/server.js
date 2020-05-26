const express = require('express');
const bodyParser = require('body-parser');
const bd = require('./bancoDeDados');

const port = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', (request, response, next) => {
  response.send(bd.getProdutos());
});

app.get('/produtos/:id', (request, response, next) => {
  response.send(bd.getProduto(request.params.id));
});

app.post('/produtos', (request, response, next) => {
  const produto = bd.salvarProduto({
    nome: request.body.nome,
    preco: request.body.preco,
  });
  response.send(produto);
});

app.put('/produtos/:id', (request, response, next) => {
  const produto = bd.salvarProduto({
    id: request.params.id,
    nome: request.body.nome,
    preco: request.body.preco,
  });
  response.send(produto);
});

app.delete('/produtos/:id', (request, response, next) => {
  const produto = bd.excluirProduto(request.params.id);
  response.send(produto);
});

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
});
