// String são indexadas
// let umaString = 'um texto';
// console.log(umaString);

// Exercicios em String

const nomeCompleto = prompt('Digite seu nome completo: ');


let nome = nomeCompleto;

document.body.innerHTML += `O seu nome é: ${nome} <br />`;
//console.log(nomeCompleto);
document.body.innerHTML += `Seu nome tem:  <b>${nomeCompleto.length}</b> letras <br />` ;
document.body.innerHTML += `A segunda letra do seu nome é: <b>${nomeCompleto.charAt(1)}</b><br>`;
document.body.innerHTML += `Qual o primeiro indice da letra o no seu nome?  <b>${nomeCompleto.indexOf('o')}</b><br>`;
document.body.innerHTML += `Qual o ultimo indice da letra o no seu nome?  <b>${nomeCompleto.lastIndexOf('o')}</b> <br>`;
document.body.innerHTML += `As últimas 3 letras do seu nome são  <b>${nomeCompleto.slice(-3, nomeCompleto.length)}</b><br>`;
document.body.innerHTML += `As palavras do seu nome são:  <b>${nomeCompleto.split(' ')}</b><br>`;
document.body.innerHTML += `Seu nome com letras MAIUSCULAS <b> ${nomeCompleto.toUpperCase()}</b><br>`;
document.body.innerHTML += `Seu nome com letras MINUSCULAS  <b>${nomeCompleto.toLowerCase()}</b><br>`;