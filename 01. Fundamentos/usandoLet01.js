let numero = 1;
{
  let numero = 2;
  console.log("dentro =", numero);
}
console.log("fora =", numero);

/**
 * OBS: o let ele procura no escopo mais proximo,
 * CASO NÃO TENHA ele procura no escopo mais abrangente.
 */
