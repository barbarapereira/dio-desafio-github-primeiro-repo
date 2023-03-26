class Pessoa {
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade
        this.anoNascimento = 2023 - idade
    }

    descrever(){
        console.log(`meu nome é ${this.nome} e eu tenho ${this.idade} anos`);
    }
}

function compararPessoas(p1, p2){
    if(p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`);
    } else  if(p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`);
    }else {
        console.log(`Ambos tem a mesma idade`);
    }
}

const barbara = new Pessoa('Bárbara Pereira', 33);
console.log(barbara);

const vitor = new Pessoa('Vitor Pereira', 23);

compararPessoas(barbara,vitor)
