// For

// for(inicializador;condicao-SVGRadialGradientElement;expressao-final){
//     //--exewcutar o codigo
// }

// Exercicios

let notas = [2,5,10,25,50,10,10,25,50,100,2,5,10,25,50,10,10,25,50,100,2,5,10,25,50,10,10,25,50,100,2,5,10,25,50,10,10,25,50,100,1148];
let total = 0;

for (let repeticoes = 0; repeticoes < notas.length; repeticoes ++){
    //total = total + notas[repeticoes]
    total += notas[repeticoes]

}


console.log('O total do seu dinheiro é R$',total)