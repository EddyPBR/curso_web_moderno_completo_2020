/**
 * Elabore duas funções que recebem três parâmetros: 
 * capital inicial, 
 * taxa de juros e 
 * tempo de aplicação. 
 * A primeira função retornará o montante da aplicação financeira sob o regime de juros simples 
 * e a segunda retornará o valor da aplicação sob o regime de juros compostos.
 */

const jurosSimples = (capital, taxa, tempo) => {
  const juros = capital * (taxa / 100) * tempo;
  const montante = capital + juros;
  return montante.toFixed(2);
}
console.log(`R$${jurosSimples(200.10, 2, 12)}`);

const jurosComposto = (capital, taxa, tempo) => {
  const juros = capital * (taxa / 12 / 100) * tempo;
  const montante = capital + juros;
  return montante.toFixed(2);
}
console.log(`R$${jurosComposto(2490, 30, 8)}`);
