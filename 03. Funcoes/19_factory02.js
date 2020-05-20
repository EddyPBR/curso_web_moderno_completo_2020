function criarProduto(nome, preco, desconto = 0.1) {
  return {
    nome, 
    preco, 
    desconto
  }
}

console.log(criarProduto('Notebook', 2199.49));
console.log(criarProduto('Notebook(black friday)', 2199.49, 25));
console.log(criarProduto('iPad', 1199.49));
