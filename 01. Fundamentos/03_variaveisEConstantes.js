var a = 3;
let b = 4;

var a = 30;
// let b = 40; //gera-se um erro: "b ja foi declarado, não pode ser redeclarado"
b = 40;

console.log(a, b);

a = 300;
b = 400;

console.log(a, b);

const c = 5;
// const c = 30; //gera-se um erro: "const c já foi declarado"
// c = 50; //gera-se um erro: "const c não pode ter seu valor alterado."
console.log(c)

/**
 * As diferenças são comentádas mais a frente,
 * mas a priori entre uso de var e let, evite
 * o uso de var.
 */
