console.log('a =', a);
var a = 2;
console.log('a =', a);

/**
 * Em algumas linguagens de programação esta escrita não seria
 * permitida, visto que a variavel "a" ainda não existia, e
 * devido ao fato de que o código é lido de cima para baixo.
 */

/**
 * Então que o que é o Hoisting? ele é o içamento da variável
 * de maneira automatica para que seja interpretada, então o que acontece
 * na prática com o código acima para que ele funcione é o seguinte;
 */

var a;
console.log('a =', a);
a = 2;
console.log('a =', a);

/**
 * Porém o Hoisting não acontece com variaveis LET.
 */