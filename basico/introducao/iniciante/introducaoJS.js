//alert('oi')

//Declaração de Variável

let nomeDaVariavel = 5;
let fruta = 'maça';

//Tipos de Variáveis

//string
let nome = 'Ricardo';

//integers
let idade = 43;

// float
let contaBancaria = 5900.00;

// Booleano é true or false
let cabeloRicardoLoiro = false;

//Arrays - contem diversos valores
let frutas = ['Maça','Banana', 'Laranja'];

//Acessar um item expecifico dentro de uma Array
frutas[0];

// Objetos 
let xicara = {cor: 'Branco', material: 'Porcelana', peso : 100};

//Acessando uma propridade de um objeto
xicara.peso;

// Exercicio -Tipos de Dados das Variáveis 
/* 
    Crie uma variável do tipo Objeto, que represente um fiat UNO.
    É Necessário conter: Ano , Modelo, se o carro ainda está em linha, e pelo menos três cores.
*/

let carros = { ano : 2015, modelo : 'Fiat Uno Mille' , foraLinha : true , cores: ['Branco','Prata','Verde']};


// Lista de Arrays - Demais exercicios
let cargos = ['Adminstrador','Médico','Advogado','Analista de Sistemas'];

// Acessar indice da array e trocar 
cargos[1] = 'Contador';

//Metodos em Javascript para adicionar itens dentro de um array de forma dinâmica
cargos.push('DevOps');

//Metodos em Javascript para remover itens dentro de um array de forma dinâmica e se Deixar vazio ele tira o ultimo item de forma dinâmica
cargos.pop();

console.log(cargos);
