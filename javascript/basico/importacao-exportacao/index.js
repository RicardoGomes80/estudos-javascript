/*
    UMa sala contem 5 alunos e para cada aluno foi sorteado um numero de 1 -100.
    Faça um programa que receba os  5 numeros sorteados para os alunos e mostrpo po maior número sorteado.

    Dadoas de entrada:
    5 
    50
    10
    90
    23


    Saida:
    98

*/

const conjuntodeEntrada = [ 5, 50, 10 , 90, 23];
let i = 0;

function gets(){
    const valor = conjuntodeEntrada[i];
    i++;
    return valor;
}
function print(texto){
    console.log(texto);
}

//module.exports = {gets , print};