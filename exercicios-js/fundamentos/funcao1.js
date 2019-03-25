// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b);
}

imprimirSoma(2, 5);
imprimirSoma(2);
imprimirSoma(2, 10, 8, 5, 0, 12, 20);
imprimirSoma();

// Funcao com retorno
function soma(a, b = 1) {
    return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
console.log(soma());