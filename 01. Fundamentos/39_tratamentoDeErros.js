function tratarErroELancar(error){
  throw new Error('Deu erro :( ');
  // throw 10;
  // throw true;
  // throw 'mensagem';
}

function imprimirNomeGritado(obg) {
  try {
    console.log(obj.nome.toUpperCase() + '!!!');
  } catch(error) {
    tratarErroELancar(error);
  } finally {
    console.log('Sou o finally, sempre serei executado, dando erro ou não... :) ');
  }
}

const obj = { nome: 'Roberto' };
imprimirNomeGritado(obj) // gera um erro;
