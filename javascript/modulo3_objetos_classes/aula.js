const pessoa = {
    nome: 'Bárbara',
    idade: 32,

    descrever: function() {
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
};

pessoa.descrever();