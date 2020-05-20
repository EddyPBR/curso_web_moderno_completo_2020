const pessoa = {
  saudacao: 'Bom dia!',
  falar() {
    console.log(this.saudacao);
    // console.log(saudacao); // error
  }
}

pessoa.falar();

const falar = pessoa.falar;
// falar() // conflito entre paradigmas: Funcional  e Objeto

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();

/**
 * O bind serve para amarrar um determinado objeto
 * para ele ser o dono da execução daquele método
 * sempre que aquele método for chamado.
 * 
 * Em outras palavra o this, passará a ser o objeto
 * no qual ele foi amarrado.
 */

pessoa.saudacao = 'oi...?';
pessoa.falar();
falarDePessoa();
