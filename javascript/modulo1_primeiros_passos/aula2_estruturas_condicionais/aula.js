
// = atribuição
// == igual
// === estritamente igual

const numero = 30;
const numeroPar = (numero % 2) === 0;

if(numeroPar){
    console.log(`${numero} é par`);
} else {
    console.log(`${numero} é impar`);
}