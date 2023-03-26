

function aplicarDesconto(valor, desconto){
    return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, juros){
    return valor + (valor * (juros / 100));
}

console.log(aplicarDesconto(100, 15));
