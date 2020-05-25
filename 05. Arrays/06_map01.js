const nums = [1, 2, 3, 4, 5];

// For com propósito
let resultado = nums.map( (element) => element * 2 );
console.log(nums, resultado);

const soma10 = (element) => element + 10;
const triplo = (element) => element * 3;
const paraDinheiro = (element) => `R${parseFloat(element).toFixed(2).replace('.', ',')}`;

resultado = nums.map(soma10).map(triplo).map(paraDinheiro);
console.log(resultado);