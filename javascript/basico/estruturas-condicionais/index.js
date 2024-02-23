// Estrutura Booleana
const camisetaAzul = true;
const camisetaVermelha = false;

// 
const numero = 10;

const numeroPar = numero % 2;
const numeroParVerdadeiro = numeroPar === 0;

console.log(numeroPar);
console.log(numeroParVerdadeiro);

// Estrutura condicional - Operadores

if (numeroParVerdadeiro){
    console.log('Numero é par');
}else{
    console.log('Numero é impar');
}

// Desafio 
/*
    Faça um programa para calcular o valor de uma viagem.
        1 - Preço do Etanol;
        2 - Preço da Gasolina;
        3 - O Tipo de combustível que esta no seu carro;
        4 - Gasto médio de combustível do carro pro KM;
        5 - Distancia em KM da viagem;


        Imprima no console o valor gadto dessa viagem.
*/

var precoEtanol = 4.29;
var precoGasolina = 5.89;
var distanciaKM = 100;
var KMGastoEtanol = 8;
var KMGastoGasolina = 10;
const tipoCombustivel = 'gasolina'; 


if (tipoCombustivel === 'Etanol'){
    kMprecoPercorrido = distanciaKM / KMGastoEtanol;
    precoFinalEtanol = kMprecoPercorrido * precoEtanol;
    console.log('Gastei ',precoFinalEtanol.toFixed(2), 'por', distanciaKM, 'km percorridos com Etanol' )
}else{
    kMprecoPercorrido = distanciaKM / KMGastoGasolina;
    precoFinalGasolina = kMprecoPercorrido * precoGasolina;
    console.log('Gastei ' + precoFinalGasolina.toFixed(2), 'por', distanciaKM, 'km percorridos com Gasolina' )
}



