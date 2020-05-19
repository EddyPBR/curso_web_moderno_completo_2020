/**
 * OPERADORES LÓGICOS
 * 
 * V e V -> V;
 * V e F -> F;
 * F e ? -> F;
 * 
 * V ou ? -> V;
 * F ou V -> V;
 * F ou F -> F;
 * 
 * V xor V -> F;
 * V xor F -> V;
 * F xor V -> F;
 * F xor F -> F;
 * 
 * !V = F;
 * !F = V;
 * 
 * !!V = V;
 * !!F = F;
 * 
 */

// or = || no javascript
// and = && no javascript
// negacao = ! no javascript
// xor = não existe no javascript (mas pode ser implementado)

function compras(trabalho1, trabalho2){
  const comprarSorvete = trabalho1 || trabalho2;
  const comprarTv50 = trabalho1 && trabalho2;
  // const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
  const comprarTv32 = trabalho1 != trabalho2;
  const manterSaudavel = !comprarSorvete; // operador unário

  return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel };
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
