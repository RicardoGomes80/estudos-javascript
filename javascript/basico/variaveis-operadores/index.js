// Diferenças entre variáveis e tipos de operadores
let variavel = 10;
console.log(variavel)

variavel = 20;
console.log(variavel)


// desafio aritmetica
/*
    Faça um programa para calcular o valor de uma viagem.

    Você terá 3 variáveis. Sendo elas:
    1 - Preço do Combustível;
    2 - Gasto médio de combustível do carro por KM.
    3 - Distância de KM da viagem;

    Imprima no console o valor que será gasto de combustível para realizar esta viagem.
*/

var precoCombustivel = 5.50;
const consumoMedioCombustiveldeLitroporKM = 20;
const distanciaEmKM = 11600;


const litrosConsumidos = distanciaEmKM / consumoMedioCombustiveldeLitroporKM;
var valorGasto = litrosConsumidos * precoCombustivel;

//console.log(valorGasto);
console.log(valorGasto.toFixed(2));

