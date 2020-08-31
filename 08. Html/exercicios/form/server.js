const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.post("/usuarios", (request, response) => {
  console.log(request.body);
  response.send("<h1>Parabéns. Usuário incluido</h1>");
});

app.post("/usuarios/:id", (request, response) => {
  console.log(request.params.id);
  console.log(request.body);
  response.send("<h1>Parabéns. Usuário alterado!</h1>");
});


app.listen(3333);
