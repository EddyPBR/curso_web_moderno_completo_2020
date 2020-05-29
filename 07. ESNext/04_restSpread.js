/**
 * operador ... rest(juntar) / spread(espalhar)
 */

// usar rest com parametro de funcao

// usar spread com objeto
const funcionario = {
  nome: 'Maria',
  salario: 8700.30
};

const clone = {
  ativo: true,
  ...funcionario
};

// usar spread com array
const grupoA = ['João', 'Pedro', 'Glória'];
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'];
console.log(grupoFinal);
