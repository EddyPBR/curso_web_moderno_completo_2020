/**
 * Crie um programa para informar quais e quantas notas são necessárias para entregar o mínimo de 
 * cédulas para um determinado valor informado pelo usuário considerando notas de 
 * R$ 100, R$ 50, R$ 10 e R$ 5 e R$ 1. Seu programa deve mostrar apenas as notas utilizadas.
 *  
 * Por exemplo, ao solicitar R$18, o programa deve informar apenas a seguinte informação 
 * (note que não foram exibidas informações sobre as demais cédulas): 
 * 
 * 1 nota(s) de R$ 10. 
 * 1 nota(s) de R$ 5. 
 * 3 nota(s) de R$ 1.
 * 
 */

const contaCedula = (valor, valorCedula, quantidade = 0) => {
  if (valor - valorCedula >= 0) {
    return contaCedula(valor - valorCedula, valorCedula, quantidade += 1);
  }
  return quantidade;
}

const entregarCedula = (valor) => {
  let quantidade = 0;

  if (valor >= 100) {
    quantidade = contaCedula(valor, 100);
    valor -= 100 * quantidade;
    console.log(`${quantidade} nota(s) de R$ 100.`)
  }
  if (valor >= 50) {
    quantidade = contaCedula(valor, 50);
    valor -= 50 * quantidade;
    console.log(`${quantidade} nota(s) de R$ 50.`)
  }
  if (valor >= 25) {
    quantidade = contaCedula(valor, 25);
    valor -= 25 * quantidade;
    console.log(`${quantidade} nota(s) de R$ 25.`)
  }
  if (valor >= 10) {
    quantidade = contaCedula(valor, 10);
    valor -= 10 * quantidade;
    console.log(`${quantidade} nota(s) de R$ 10.`)
  }
  if (valor >= 5) {
    quantidade = contaCedula(valor, 5);
    valor -= 5 * quantidade;
    console.log(`${quantidade} nota(s) de R$ 5.`)
  }
  if (valor >= 1) {
    quantidade = contaCedula(valor, 1);
    valor -= 1 * quantidade;
    console.log(`${quantidade} nota(s) de R$ 1.`)
  }
}

entregarCedula(1177);
entregarCedula(1075);
entregarCedula(1150);
entregarCedula(1025);
entregarCedula(1000);
entregarCedula(100);
entregarCedula(75);
entregarCedula(50);
entregarCedula(25);
entregarCedula(15);
entregarCedula(10);
entregarCedula(5);
entregarCedula(3);
