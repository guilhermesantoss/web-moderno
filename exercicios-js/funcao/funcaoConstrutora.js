function Carro(velocidadeMaxima = 200, delta = 5) {
    // atributo privado
    // como esse atributo é privada, para modificado é preciso criar funções GET e SET
    let velocidadeAtual = 0;

    // metodo publico
    // o this na frente do nome da função torna a mesma uma função pública

    // exemplo de funcao privada com (const) ou (let)
    // const acelerar = function() {
    //     console.log("Sou uma funcao privada");    
    // }
    this.acelerar = function() {
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta;
        } else {
            velocidadeAtual = velocidadeMaxima;
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function() {
        return velocidadeAtual;
    }
}

const uno = new Carro();
uno.acelerar();
console.log(uno.getVelocidadeAtual());

const ferrari = new Carro(350, 20);
ferrari.acelerar();
ferrari.acelerar();
ferrari.acelerar();
console.log(ferrari.getVelocidadeAtual());

console.log(typeof Carro);
console.log(typeof ferrari);
