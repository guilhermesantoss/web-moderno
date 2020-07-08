const express = require('express');

const port = 3003;

const app = express();

app.get('/produtos', (req, res) => {
  res.send({ nome: 'Notebook', preco: 519.99 }); // automaticamente converte para JSON
});

app.listen(port, () => {
  console.log(`Servidor executando na porta ${port}`);
});