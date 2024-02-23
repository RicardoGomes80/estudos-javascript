// Nota 
var nota1 = 5;
var nota2 = 10;
var nota3 = 7;
const media  = (nota1 + nota2 + nota3)/3;

if(media >=7){   
    console.log('Sua media é',media.toFixed(2),' e foi aprovado'); 
}else if(media >=5 && media <=7 ){
    console.log('Sua media é',media.toFixed(2),' e esta em recuperação'); 
}else{
    console.log('Sua media é',media.toFixed(2),'repetiu de ano'); 
}

// Calculo e IMC
/*
Formula do IMC : IMC = peso / (altura * altura)
COndição 
 - Abaixo de 18+5 - Abaixo do peso;
 - Entre 18.5 e 25 - Peso Normal;
 - Entre 25 e 30 Acima do Peso;
 - Entre 30 e 40 Obeso;
 - Acima de 40 Obesidade Grave;
*/

var peso = 75;
var altura = 1.76;
var imc = peso / (altura * altura);


if (imc <= 18.5){
    console.log('Seu IMC é',imc.toFixed(2),'e você está abaixo do peso');
}else if(imc > 18.5 && imc <= 25){
    console.log('Seu IMC é',imc.toFixed(2),'e você está com peso Normal');
}else if(imc > 25 && imc <= 30){
    console.log('Seu IMC é',imc.toFixed(2),'e você está acima do Peso');
}else if(imc > 30 && imc <= 40){
    console.log('Seu IMC é',imc.toFixed(2),'e você está obeso');
}else{
    console.log('Seu IMC é',imc.toFixed(2),'e você está com Obesidade Grave');
}

// Valor pagpo de um produto
/*
    Condição de Pagamento:
    - A vista Debito, recebe 10 % de Desconto;
    - A vista Dinheiro ou PIX , recebe 15% de Desconto;
    - Em duas vezes , preço normal de etiqueta sem desconto e sem juros;
    - Acima de duas vezes , preço normal de etiqueta mais juros de 10%;
*/

var precoProduto = 250.75;

const VendaVistaDebito = precoProduto - (precoProduto * 0.10);
const VendaVistaDinDinPix = precoProduto - (precoProduto * 0.15) ;
const DuasVezes = precoProduto;
const AcimaDuaVezes = (precoProduto * 0.10) + precoProduto;

var condicaoPagamento = 'AcimaDuaVezes';

if (condicaoPagamento === 'VendaVistaDebito'){
    console.log('A condição de pagamento á Vista no Debito tem 10% de Desconto sendo R$', VendaVistaDebito);
}else if (condicaoPagamento === 'VendaVistaDinDinPix'){
    console.log('A condição de pagamento á Vista no Dinheiro ou PIX tem 15% de Desconto sendo R$', VendaVistaDinDinPix);
}else if (condicaoPagamento === 'DuasVezes'){
    console.log('A condição de pagamento em duas vezes não possui desconto e ou Juros e seu valor é R$', DuasVezes);
}else{
    console.log('A condição de pagamento acima de vezes não possui  mais tem encargos de 10% sendo seu valor é R$', AcimaDuaVezes);    
}
