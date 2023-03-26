const nota1 = -15;
const nota2 = 3; 
const nota3 = 6;
const media = (nota1 + nota2 + nota3) / 3;

if(media > 0 && media < 5) {
    console.log(`aluno reprovado com média ${media.toFixed(1)}`);
} else if(media > 5 && media <= 7) {
    console.log(`aluno em recuperação com média ${media.toFixed(1)}`);
}else if(media > 7 && media <= 10) {
    console.log(`aluno passou de semestre com média ${media.toFixed(1)}`);
} else {
    console.log('média inválida');
}