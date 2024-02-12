//alert('Prompt');
//const confirma = confirm('Realmente deseja fechar?');

let num1 = prompt('Digite um numero: '); // Aqui estão como string
let num2 = prompt('Digite outro numero: '); // Aqui estão como string




console.log(typeof num1, typeof num2);
console.log(num1 , num2);
console.log(num1 + num2);


num1 = Number(num1);
num2 = Number(num2);


const resultado = num1 + num2;

console.log(typeof num1, typeof num2);

alert(`O resultado da sua conta é ${resultado}`); // Usando Template Strings

