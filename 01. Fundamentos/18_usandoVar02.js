/**
 * Não existe escopo de bloco para as variaveis do tipo VAR.
 */

numero = 1;
{
  var numero = 2;
  console.log("dentro =", numero);
}
console.log("fora =", numero);
