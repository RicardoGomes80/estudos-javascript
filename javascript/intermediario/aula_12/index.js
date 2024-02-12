let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

console.log(`Primeiro Resultado ${varA},${varB},${varC}`);

varA = varB;
varB = varC;
varC = varA;

console.log(`Resultado do Exercicio varA recebe ${varB}, varB recebe ${varC}, varC recebe ${varA}`);

// Solução do Professor
[varA,varB,varC] = [varB,varC,varA]

console.log(`Resultado da solução do professor é varA recebe ${varB}, varB recebe ${varC}, varC recebe ${varA}`);

