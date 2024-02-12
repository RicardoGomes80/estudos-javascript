/*
Luiz Otávio Miranda tem 30 anos, pesa 84 Kg
tem 1.80 de Altura e sei IMC é de 25.9259259...

*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
let anoNascimento = 1980;
let anoAtual = 2024;
let idade = anoAtual - anoNascimento ;
const peso = 84;
const alturaEmM = 1.80; // <-- NESTE LOCAL

let imc = peso / (alturaEmM * alturaEmM);  // peso / (altura * altura)



console.log(nome,sobrenome,'tem ',idade,'anos, pesa',peso,'Kg e tem ',alturaEmM,'de Altura e seu IMC é de',imc,'e nasceu em',anoNascimento)


// template strings

console.log(`${nome} ${sobrenome}tem ${idade} anos e tem ${alturaEmM} de altura `);

