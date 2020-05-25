const escola = [{
  nome: 'Turma M1',
  alunos: [{
    nome: 'Gustavo',
    nota: 8.1
  }, {
    nome: 'Ana',
    nota: 9.3
  }]
}, {
  nome: 'Turma M2',
  alunos: [{
    nome: 'Rebeca',
    nota: 8.9
  }, {
    nome: 'Roberto',
    nota: 7.3
  }]
}];

const getNotaDoAluno = aluno => aluno.nota;
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno);

let notas = escola.map(getNotaDaTurma);
console.log(notas);


// console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ])); // simulando a saida de como deve ser o flatMap
Array.prototype.flatMap = function(callback) {
  return Array.prototype.concat.apply([], this.map(callback));
}
notas = escola.flatMap(getNotaDaTurma);
console.log(notas);
