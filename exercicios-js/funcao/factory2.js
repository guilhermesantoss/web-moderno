function criarProduto(nome, preco) {
  return {
    nome,
    preco,
    desconto: 0.1
  }
}

console.log(criarProduto("gabinete gamer", 799.90));
console.log(criarProduto("Notebook Dell G3", 5599.90));
console.log(criarProduto("Iphone XR", 3359.90));