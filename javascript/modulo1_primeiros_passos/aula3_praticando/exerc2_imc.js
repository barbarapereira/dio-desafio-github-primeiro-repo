const peso = 92;
const altura = 1.84;
const imc = peso / Math.pow(altura, 2);

if(imc < 18.5){ console.log(`Seu imc é ${imc.toFixed(1)} - Abaixo do peso`);} 

else if(imc >= 18.5 && imc <= 25) { console.log(`Seu imc é ${imc.toFixed(1)} - Peso normal`); } 

else if (imc => 25 && imc <= 30){ console.log(`Seu imc é ${imc.toFixed(1)} - Acima do peso`); } 

else if (imc > 30 && imc <= 40){ console.log(`Seu imc é ${imc.toFixed(1)} - Obeso`); } 

else if (imc > 40){ console.log(`Seu imc é ${imc.toFixed(1)} - Obesidade grave`); } 

else { console.log('imc inválido'); }