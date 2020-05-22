/**
 * Construa uma função que receberá duas Strings de tamanhos variados e que retornará 
 * True ou False caso todos os caracteres (independentemente de ser maiúsculo ou minúsculo) 
 * estejam contidos em ambas palavras.
 */

const verificaStrings = (palavra1, palavra2) => {
  palavra1 = palavra1.toLowerCase();
  palavra2 = palavra2.toLowerCase();

  for (let i = 0; i < palavra1.length; i++) {
    if (!palavra2.includes(palavra1[i])) return false
  }
  for (let i = 0; i < palavra2.length; i++) {
    if (!palavra1.includes(palavra2[i])) return false
  }
  return true;
}

console.log( verificaStrings('abc', 'CBA') );
console.log( verificaStrings('abc', 'CBAF') );
