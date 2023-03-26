
function calcularImc(peso, altura){
    return peso / Math.pow(altura,2);
}

function classificarImc(imc) {    
    if(imc < 18.5){ return `Seu imc é ${imc.toFixed(1)} - Abaixo do peso`;} 
    else if(imc >= 18.5 && imc <= 25) { return `Seu imc é ${imc.toFixed(1)} - Peso normal`; } 
    else if (imc => 25 && imc <= 30){ return `Seu imc é ${imc.toFixed(1)} - Acima do peso`; } 
    else if (imc > 30 && imc <= 40){ return `Seu imc é ${imc.toFixed(1)} - Obeso`; } 
    else if (imc > 40){ return `Seu imc é ${imc.toFixed(1)} - Obesidade grave`; } 
    else { return `imc inválido`; }
}

//funcção anonima
(function () {
    const peso = 78;
    const altura = 1.60;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})()



/*function sayMyName(name) {
    console.log(`Your name is: ${name}`);
}

function quadrado(value){
    return value * value; 
}

sayMyName('Bárbara');
console.log(quadrado(5) * quadrado(2));

*/