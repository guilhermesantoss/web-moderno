const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

pilotos.pop(); //remove um elemento da ultima posicao do array
console.log(pilotos);

pilotos.push('Verstappen'); // adiciona um elemento na ultima posicao do array
console.log(pilotos);

pilotos.shift(); // remove um elemento da primeira posicao do array
console.log(pilotos);

pilotos.unshift('Hamilton'); // adiciona um elemento na primeira posicao do array
console.log(pilotos);

// splice pode adicionar ou remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// remover
pilotos.splice(3, 1);
console.log(pilotos);

// slice retorna um novo array
const algunsPilotos1 = pilotos.slice(2);
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // aqui o slice pega do indice 1 ao 4, mas nao inclui o indice 4 no console.log
console.log(algunsPilotos2);