// nao aceita repeticao e nao indexada
const times = new Set();
times.add('Vasco');
times.add('Sao Paulo').add('Santos').add('Corinthians');
times.add('Flamengo');
times.add('Vasco');

console.log(times);
console.log(times.size);
console.log(times.has('vasco'));
console.log(times.has('Vasco'));
times.delete('Flamengo');
console.log(times.has('Flamengo'));

const nomes = ['Raquel', 'Julia', 'Lucas', 'Guilherme', 'Lucas'];
const nomesSet = new Set(nomes);
console.log(nomesSet);
