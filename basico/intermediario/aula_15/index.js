/*
    // Objeto Math em Javascript - usado para calculos matemáticos

    //let num1 = 9.50;
    //let num2 = Math.floor(num1); // Arredondar o numero para baixo - numero Interiro 
    //let num2 = Math.ceil(num1); // Arrendonda pra cima o numero - NUmero inteiro ou flutuante
    //let num2 = Math.round(num1); // Arrendonda pra cuma o mais proximo da metad de numero flutuante

    console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // Maior numero da sequencia 
    console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6)); // Menor numero da sequencia 
    console.log(Math.random()); // Gera um numero aleatorio entre 0 e 1 se os parenteses estiverem vazios

    const aleatorio = Math.round(Math.random() * (10 - 5) + 5); // Inserir outros metodos Math dentro do outro
    console.log(aleatorio);

*/
//console.log(num2);


//exercicio ocm Number e Math

const numero = Number(prompt('Digite um número'));
const raizQuadrada = document.getElementById('raizQuadrada');
const numeroTitulo = document.getElementById('numero-titulo'); //metodo por ID que eu quero add

const texto = document.getElementById('texto');
const numeroInteiro =  document.getElementById('numeroInteiro');
const duas_casas = document.getElementById('duas_casas');
const nan_sim = document.getElementById('nan_sim');
const redondoPraCima = document.getElementById('redondoPraCima');
const redondoPraBaixo = document.getElementById('redondoPraBaixo');


numeroTitulo.innerHTML = numero; // adiciona o conteudo do prompt no HTML
texto.innerHTML = `<p>Seu número + 2 é <b>${numero + 2}</b></p>`; // Usando Template String
numeroInteiro.innerHTML = `${numero} é inteiro?: ${Number.isInteger(numero)}`
raizQuadrada.innerHTML = `Raiz quadrada: ${numero ** 0.5}`;
duas_casas.innerHTML = `Com duas casas decimais: ${numero.toFixed(2)}`;
nan_sim.innerHTML = `È NaN? ${Number.isNaN(numero)}`;
redondoPraCima.innerHTML = `Arredondado para Cima ${Math.ceil(numero)}`;
redondoPraBaixo.innerHTML = `Arredondado para Baixo ${Math.floor(numero)}`;