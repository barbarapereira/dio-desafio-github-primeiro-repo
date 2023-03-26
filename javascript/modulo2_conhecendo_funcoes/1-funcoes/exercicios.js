function sayMyName(name){
    return `${name}`;
}



function verificarIdade(idade){
    if(idade >= 18){
        ;
        console.log(sayMyName('Bárbara'),'você é maior de idade');
    }else {
        sayMyName('Bárbara');
        console.log(sayMyName('Bárbara'), 'você é menor de idade');
    }
}

verificarIdade(16);