const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: true }, 
  { nome: 'Pedro', nota: 9.8, bolsista: false }, 
  { nome: 'Ana', nota: 8.7, bolsista: true }
];

// Imperativo
let total1 = 0;
for(let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota
}
console.log(total1 / alunos.length);

// Declarativo
const getNota = aluno => aluno.nota;
const soma = (total, atual) => total + atual;
const total2 = alunos.map(getNota).reduce(soma);
console.log(total2 / alunos.length);

// select codigo, nome, email from clientes where ativo = 1; #declarativo
