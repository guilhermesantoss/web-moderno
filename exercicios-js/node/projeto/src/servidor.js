const express = require('express');
const bancoDeDados = require('./bancoDeDados');
const bodyParser = require('body-parser');

const port = 3003;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/produtos', (req, res) => {
  res.send(bancoDeDados.getProdutos());
});

app.get('/produtos/:id', (req, res) => {
  res.send(bancoDeDados.getProduto(req.params.id));
});

app.post('/produtos', (req, res) => {
  const produto = bancoDeDados.salvarProduto({
    nome: req.body.nome,
    preco: req.body.preco
  });
  res.send(produto);
});

app.put('/produtos/:id', (req, res) => {
  const produto = bancoDeDados.salvarProduto({
    id: Number(req.params.id),
    nome: req.body.nome,
    preco: req.body.preco
  });
  res.send(produto);
});

app.delete('/produtos/:id', (req, res) => {
  const produto = bancoDeDados.excluirProduto(Number(req.params.id));
  res.send(produto);
});

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
});