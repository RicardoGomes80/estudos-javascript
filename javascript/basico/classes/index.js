console.log('classes teste');

// classes e instancias
/*  
    Classe e a definição do que deveria ser
    Instância é a uma ocorrência
 */


class Pessoa {
    nome;
    idade;
    altura;
    cidadeNascimento;

    constructor(nome,idade,altura,cidadeNascimento){ // ´e que acontece quando uma classe é instanciada
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.cidadeNascimento = cidadeNascimento;
    }


    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é  ${this.idade} anos , tenho ${this.altura} e minha cidade natal é ${this.cidadeNascimento} `);       
    }
}



const vitor = new Pessoa("Vitor",25,1.57,"Araçoiaba da Serra");
vitor.descrever();


// Funções Recebendo Objetos

function compararPessoas(p1,p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    }else if(p1.idade < p2.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`);
    }
}

const Vitor = new Pessoa ('Vitor' , 25);
const Renan = new Pessoa ('Renan' , 30);


compararPessoas(Vitor,Renan);

// Praticando com Objetos e Classes
/*
    1 - Crie uma classe pra representar carros
    Os carros possuem uma marca , uma cor e um gasto medio de combustivel por KM rodado.
    Crie um metodo que dado a quantidade de qulometros e o preço do combustivel 
    nos dê o valor gasto em reais para realizar este percurso.
*/

class Carro{
    marca;
    cor;
    KmRodado;

    constructor(marca,cor,KmRodado){
        this.marca = marca;
        this.cor = cor;
        this.KmRodado = KmRodado;
    }
 
    calcularGastoPercurso(distanciaEmKM,precoCombustivel){
        return distanciaEmKM * this.KmRodado * precoCombustivel;
    }

    descrever() {
        console.log(`o veículo ${this.marca} com a cor  ${this.cor} gasta ${this.KmRodado} Km `);       
    }
}

const uno = new Carro('Fiat','Laranja',1/12);
const palio = new Carro('Fiat','Azul',1/10);

console.log(uno);
uno.descrever();
console.log(uno.calcularGastoPercurso(70,5.59));
console.log(palio.calcularGastoPercurso(70,5.59));


///Exercicio 2
/*
  2) Crie uma classe para representar pessoa.
    - Para cada pessoa teremos os atributos nome,peso e altura;
    - As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    - Instancie uma pessoa chamada José que tenha 70KG de peso e 1,75 de altura e 
    peça ao José para dizer o valor do seu IMC;

    IMC	CLASSIFICAÇÃO	    OBESIDADE           (GRAU)
    MENOR QUE 18,5	        MAGREZA	            0
    ENTRE 18,5 E 24,9	    NORMAL	            0
    ENTRE 25,0 E 29,9	    SOBREPESO	        I
    ENTRE 30,0 E 39,9	    OBESIDADE	        II
    MAIOR QUE 40,0	        OBESIDADE GRAVE	    III
*/


class PessoaIMC{
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return this.peso / (this.altura * this.altura);       
    }
   
     classificarIMC(){
        const IMC = this.calcularIMC();
        
        if (IMC <= 18.5){
            return ('Você está abaixo do peso');
        }else if(IMC > 18.5 && IMC <= 25){
            return ('V você está com peso Normal');
        }else if(IMC > 25 && IMC <= 30){
            return ('Você está acima do Peso');
        }else if(IMC > 30 && IMC <= 40){
            return ('Você está obeso');
        }else{
            return ('Você está com Obesidade Grave');
        }
     }
}

const jose = new PessoaIMC('jose',89,1.79);
console.log(jose.calcularIMC());

const Ricardo = new PessoaIMC('Ricardo',89 ,1.77);
console.log(Ricardo.classificarIMC());



