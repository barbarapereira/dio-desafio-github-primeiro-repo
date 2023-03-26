//conta aritimética
// faça um programa para calcular um valor de uma viagem

const precoCombustivel = 5.79;
const kmPorLitro = 1;
const distanciaEmKm = 100;

const litrosConsumidos = distanciaEmKm / kmPorLitro;

const valorGasto = litrosConsumidos * precoCombustivel

console.log(`O gasto médio da viagem foi: R$ ${valorGasto.toFixed(2)}`);