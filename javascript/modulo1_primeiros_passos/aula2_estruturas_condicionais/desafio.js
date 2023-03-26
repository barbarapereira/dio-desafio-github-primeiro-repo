const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitro = 10;
const distanciaEmKm = 100;
const tipoCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitro;

let valorGasto;
if(tipoCombustivel === 'Etanol') {
    valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));

} else {
    valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}

