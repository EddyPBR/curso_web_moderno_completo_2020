const axios = require("axios");

const url = "http://files.cod3r.com.br/curso-js/funcionarios.json";

const chineses = funcionario => funcionario.pais === 'China';
const mulheres = funcionario => funcionario.genero === 'F';
const menorSalario = (funcionario, atualFuncionario) => {
  return funcionario.salario < atualFuncionario.salario ? funcionario : atualFuncionario;
}

// mulher chinesa com menor salário
axios.get(url).then(response => {
  const funcionarios = response.data;
  const funcMenorSalario = funcionarios.filter(chineses).filter(mulheres).reduce(menorSalario);
  console.log(funcMenorSalario);
});
