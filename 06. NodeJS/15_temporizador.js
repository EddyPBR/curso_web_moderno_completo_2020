/**
 * yarn add node-schedule
 * npm -i node-schedule
 */

const schedule = require('node-schedule');

// executando na terça-feira, qualquer mes, qualquer dia, as 12h, qualquer minuto, a cada 5 segundos
const tarefa1 = schedule.scheduleJob('*/5 * 12 * * 2', function() {
  console.log('Executando Tarefa 1!', new Date().getSeconds());
});

setTimeout(function(){
  tarefa1.cancel();
  console.log('Cancelando Tarefa 1!');
}, 20000);

const regra = new schedule.RecurrenceRule();
regra.dayOfWeek = [new schedule.Range(1, 5)]; // de segunda a sexta
regra.hour = 12;
regra.second = 30;

const tarefa2 = schedule.scheduleJob(regra, function() {
  console.log('Executando Tarefa 2!', new Date().getSeconds());
});
