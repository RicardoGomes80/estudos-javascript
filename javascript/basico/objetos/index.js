//alert('Objetos');

// Objetos: é uma coleção de dados ( coleção dinamica de dados e valores);

const pessoa = {
    nome: 'Ricardo Gomes',
    idade: 43,
    altura: 1.77,
    cidadeNascimento: 'Ribeirão Pires'
}

pessoa.estado = 'São Paulo';

console.log(pessoa.nome);
console.log(pessoa.altura);
console.log(pessoa.cidadeNascimento);
console.log(pessoa);

// Metodos para o objeto

const pessoa2 = {
    nome: 'Madalena Gomes',
    idade: 67,
    altura: 1.59,
    cidadeNascimento: 'Fernandopolis', // inserir a virgula

    // metodo

    descrever: function(){
        //this  assume o objeto e cria uma função dentro do objeto
        console.log(`Meu nome é ${this.nome} e minha idade é  ${this.idade} anos`); // usar crase nesse exemplo
    }


};

// objetos literais

console.log(pessoa2);
pessoa2.descrever(); // função
console.log(pessoa2['nome']);


