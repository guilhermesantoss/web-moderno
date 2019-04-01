const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao);
    }
};

pessoa.falar();
const falar = pessoa.falar;
falar(); // conflito entre paradigmas: funcional e OO

// bind é usado sempre que vc quiser ter a referencia de THIS de um objeto especifico
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();
