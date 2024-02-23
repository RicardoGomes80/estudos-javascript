console.log('Arrays');


const alunos = ['João' , 'Victor ' , 'Marina '];
console.log(alunos);
alunos[4] = 'Vinicius';
console.log(alunos);


delete alunos[1];
console.log(alunos);


// notas

let notas = [];

notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

console.log(notas);

//Notas com FOR
let somaNota = 0;

for( let i = 0; i < notas.length; i++){
    let nota = notas[i];
    somaNota = somaNota + nota;
}

let media = somaNota / notas.length;
console.log('A media dessa bagaça é', media);

// let soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];
// console.log(soma / 5);



for(let i = 0;i < 10;i ++){
    console.log(i);
}

// For em uma String

const nome = 'Ricardo Rodrigues Gomes';
nome.length;

for(let i = 0;i < nome.length;i ++){
    console.log(nome[i]);   
}

console.log(nome.length);

/// Exercicio
/*
    1) Crie um programa que dado um número imprima a sua tabuada
*/
tabuadaDo = 9;
numero = [0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8, 9 , 10];

for (let i = 0; i <= 10; i++) {
    
    console.log('Tabuada de '+ tabuadaDo + ' x ' + i + ' : ' + tabuadaDo * i);
}

// Exercicios 2
// Percorrer lista de numeros que seja capaz de percorrer uma lista de numeros e imprima numeros pares encontrados;

const numeros = [0,1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i <= numeros.length; i++) {
    numeroPar = i % 2;
    //console.log(numeroPar);
    if (numeroPar === 0){
        console.log('Numero é par ' + i);
    }else{
        console.log('Numero é impar ' + i);
    }
}