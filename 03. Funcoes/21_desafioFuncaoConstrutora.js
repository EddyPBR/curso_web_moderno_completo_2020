function Pessoa(nome) {
  this.nome = nome;
  
  this.falar = function() {
    console.log(`Meu nome é: ${this.nome}`);
  }
  // this.falar = () => console.log(`Meu nome é: ${nome}`); // funciona
}

const p1 = new Pessoa('Edvaldo');
p1.falar();

const p2 = new Pessoa('Junior');
p2.falar();

const p3 = new Pessoa('EddyPBR');
p3.falar();
