// CÓDIGO NÃO EXECUTÁVEL

/**
 * PROCEDURAL:
 * 
 * Baseado em funções onde são passados os dados, e feito algum tipo
 * de processamento e que podem ou ter algum tipo de retorno.
 */

processamento(valor1, valor2, valor3);


/**
 * ORIENTADO A OBJETO:
 * 
 * Ao contrário do procedural, a orientação a objetos consistem em 
 * abstrair o mundo real, de tal forma que um objeto abstrato ou real
 * possa ser implementado. Então você tem dados (objeto) e dentro desses
 * dados você tem funcoes (metodos).
 */

objeto = {
  valor1,
  valor2,
  valor3,
  processamento() {
    // ...
  }
}

objeto.processamento();

/**
 * principios importantes:
 * 
 * - Abstração: Abstração consistem em abstrair um objeto do mundo real, 
 * porém nem tudo do objeto é conveniente para o projeto. Por exemplo,
 * você esta criando sistema de vendas, e você precisa de algumas informações
 * do objeto PESSOA, pessoa possui, cpf, nº do cartao de credito, endereço para
 * entrega de produtos e etc. Não lhe interessa tudo de pessoa para o projeto,
 * como por exemplo, altura, cor dos olhos, cor do cabelo e etc. Então cabe
 * abstrair os principais pontos de determinado objeto para o programa.
 * 
 * - Encapsulamento: É ter os detalhes de funcionamento escondidos, e mostrar
 * apenas para o usuário o que realmente é necessário para o funcionamento do programa.
 * Ex.: Um CARRO, um carro possui motores, hidraúlida, injeção de combustivel e etc. 
 * quem vai dirigir um carro não precisa saber como tudo isso funciona, ele so precisa saber
 * acessar a interface do carro, e o que seria a interface? o volante, as marchas, a chave de 
 * ignição, a seta e etc. Então o encapsulamento nada mais é que proteger e esconder o código
 * do usuario do programa para que seja mais facil o acesso e ainda proteja todo o objeto.
 * 
 * - Herança: Este príncipio consistem em fazer uma junção de varios objetos para compor
 * um mecanismo. EX.: o corpo humano, o corpo humano é formado por n orgãos, cada orgão 
 * tem uma funcionalidade diferente, agora imagine que cada orgão é um objeto diferente.
 * e o objeto corpoHumano será constituido por varios outros objetos (orgãos) formando um único
 * objeto. Além de que um objeto pode ser herdado por outro objeto. Ex.: Imagine o contexto de um
 * sistema escolar, na escola existem alunos e professores, ambos são pessoas. Então o objeto
 * Pessoa passará seus atributos para alunos e para professores, porém professores possuem n dados
 * que alunos não tem e vice-versa. Ou seja, os objetos Aluno e Professor herdam os atributos do
 * objeto Pessoa para compor um novo objeto.
 * 
 * - Polimorfismo: Polimorfismo é o princípio a partir do qual as classes derivadas de uma única 
 * classe base são capazes de invocar os métodos que, embora apresentem a mesma assinatura, 
 * comportam-se de maneira diferente para cada uma das classes derivadas.
 * EX.: podemos dizer que uma classe chamada Vendedor e outra chamada Diretor podem ter como 
 * base uma classe chamada Pessoa, com um método chamado CalcularVendas. Se este método 
 * (definido na classe base) se comportar de maneira diferente para as chamadas feitas 
 * a partir de uma instância de Vendedor e para as chamadas feitas a partir de uma instância de 
 * Diretor, ele será considerado um método polimórfico, ou seja, um método de várias formas.
 */