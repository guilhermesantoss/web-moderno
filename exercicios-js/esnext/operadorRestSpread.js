// operador ... rest(juntar)/spread(espalhar)
// usar o rest com parametro de funcao

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12348.99 };
const clone = { ativo: true, ...funcionario };
console.log(clone);

// usar spread com arrau=y
const grupoA = ['Joao', 'Pedro', 'Gloria'];
const grupoFinal = ['Maria', ...grupoA, 'Rafaela'];
console.log(grupoFinal);