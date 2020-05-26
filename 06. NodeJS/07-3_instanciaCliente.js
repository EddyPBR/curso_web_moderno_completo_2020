const contadorA = require('./07-1_instanciaUnica');
const contadorB = require('./07-1_instanciaUnica');

const contadorC = require('./07-2_instanciaNova')();
const contadorD = require('./07-2_instanciaNova')();

contadorA.incrementar();
contadorA.incrementar();
console.log(contadorA.valor, contadorB.valor);

contadorC.incrementar();
contadorC.incrementar();
console.log(contadorC.valor, contadorD.valor);
