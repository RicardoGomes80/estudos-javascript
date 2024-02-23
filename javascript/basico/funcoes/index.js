//Funçoes em Javascript
function teste(){
    console.log('Funções');
}

function sayMyName(name){
    console.log('Seu nome é: ' + name);
}

teste(); // Parametro

sayMyName('Ricardo');
sayMyName('MOM');

// exemplo de função com Incremento de Juros

function incrementarJuros(valor , percentulaJuros){
    const valorAcrescimo = (percentulaJuros / 100) * valor;
    return valor + valorAcrescimo;
}

console.log(incrementarJuros(100,10));
console.log(incrementarJuros(100,15));
console.log(incrementarJuros(100,20));

//
function main(){
    console.log('Programa Principal');
}

main();

// exemplos de funções com IMC

function calcularIMC (peso , altura){
    return peso / (altura * altura);
}

function classificarIMC(){
    if (imc <= 18.5){
        return 'Seu IMC é',imc.toFixed(2),'e você está abaixo do peso';
    }else if(imc > 18.5 && imc <= 25){
        return 'Seu IMC é',imc.toFixed(2),'e você está com peso Normal';
    }else if(imc > 25 && imc <= 30){
        return 'Seu IMC é',imc.toFixed(2),'e você está acima do Peso';
    }else if(imc > 30 && imc <= 40){
        return 'Seu IMC é',imc.toFixed(2),'e você está obeso';
    }else{
        return 'Seu IMC é',imc.toFixed(2),'e você está com Obesidade Grave';
    }
}

var peso = 89;
var altura = 1.77;
var imc = calcularIMC(peso ,altura);

console.log(imc.toFixed(2)  + ' ' + classificarIMC(imc));
//console.log(classificarIMC(imc));
//Exercicio funções

function meuNome(nome){
    console.log('Meu nome é: ' + nome);
}

meuNome('Ricardo');
meuNome('OIOI');

// Funções maior de idade

function verificarIdade(idade){
    if (idade >= 18){
        console.log('Você tem ' + idade + ' anos e é considerado maior de idade');
    }else{
        console.log ('Você tem ' + idade + ' anos e é considerado menor de idade');
    }
}

verificarIdade(19);
verificarIdade(15);


// funções com forma de pagamento
