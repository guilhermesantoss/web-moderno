console.log(soma(3, 4));

// quando eu declaro uma funcao da forma "function declaration", o interpretador do JavaScript
// primeiro carrega todas as funcoes do arquivo, e depois executa os seus códigos

// function declaration
function soma(x, y) {
    return x + y;
}

// function expression
const sub = function(x, y) {
    return x - y;
}
console.log(sub(3, 4));

// named function expression
const mult = function mult(x, y) {
    return x * y;
}
console.log(mult(3, 4));