//alert('Estudos sobre funções')


//excercicios calculadora

function soma(num1,num2){
    return num1 + num2;
}

function subtrair(num1,num2){
    return num1 - num2;
}

function multiplicacao (num1,num2){
    return num1 * num2;
}

function dividir(num1,num2){
    return num1 / num2;
}

let parametro1 = parseFloat(prompt('Insira o primeiro numero a ser calculado'));
let parametro2 = parseFloat(prompt('Insira o segundo numero a ser calculado'));


let operacao = prompt('Escolha a operação2: \n Digite 1 para Soma, \n Digite 2 Para Subtrair, \n Digite 3 para Multiplicar, \n Digite 4 para Dividir')

if (operacao === "1"){
    alert(soma(parametro1,parametro2));
} else if(operacao === "2"){
    alert(subtrair(parametro1,parametro2));
} else if(operacao === "3"){
    alert(multiplicacao(parametro1,parametro2));
} else if(operacao === "4"){
    alert(dividir(parametro1,parametro2));
} else {
    alert('Operação Digitada errada, por favor volte novamente');
}