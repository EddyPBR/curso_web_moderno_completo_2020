function Pessoa() {
  this.idade = 0;

  setInterval(() => {
    this.idade++;
    console.log(this.idade);
  }, 1000);
}

new Pessoa;

/**
 * O this com arrow functions não varia, 
 * sendo assim o this ele sempre sera amarrado ao
 * objeto em que ele esta associado.
 */