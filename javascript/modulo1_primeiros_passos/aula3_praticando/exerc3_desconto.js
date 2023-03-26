const valorEtiqueta = 59.90;
const formaPagamento = 'acimaDe2x';
let desconto;

if(formaPagamento === 'debito'){
    desconto = valorEtiqueta * 0.1;
    console.log(`Débito - O novo valor da compra com desconto é R$ ${(valorEtiqueta - desconto).toFixed(2)}`);
} else if(formaPagamento === 'dinheiro' || formaPagamento === 'pix'){
    desconto = valorEtiqueta * 0.15;
    console.log(`Dinheiro - O novo valor da compra com desconto é R$ ${(valorEtiqueta - desconto).toFixed(2)}`);
} else if (formaPagamento === 'cartao2x'){
    console.log(`Sua compra foi parcelada em 2x de é R$ ${(valorEtiqueta / 2).toFixed(2)}`);
}else if (formaPagamento === 'acimaDe2x'){
    desconto = valorEtiqueta * 0.10;
    console.log(`Sua compra foi parcelada em 3x R$ ${((valorEtiqueta + desconto)/3).toFixed(2)}`);
}