class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome;
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = 'professor') {
    super(sobrenome);
    this.profissao = profissao;
  }
}

class Filho extends Pai {
  constructor() {
    super('Silva');
    // super('Silva', 'Motorista');
  }
}

const filho = new Filho;
console.log(filho);
