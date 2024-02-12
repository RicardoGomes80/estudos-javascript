//alert("Manipulando o DOM")
// Capturando o elemento por ID

let titulo = document.getElementById("titulo1");
console.log(titulo)


// Capturando o elemento por Classe

let titulo2 = document.getElementsByClassName("titulo2");
console.log(titulo2)


//Capturando por tags

let tags = document.getElementsByTagName("p");
console.log(tags)


//Trocar texto via Javascript

let novoTitulo = document.getElementById("titulo1").innerHTML = "Ola mundo de HTML para Javascript com DOM"

let msg =  prompt("Ver mensagem escondida? \n Digite 1 para sim e \n 2 para não")

if (msg === "1" ){
    let novoElemento = document.createElement("h2");
    novoElemento.innerHTML = "Olá! Sou um elemento gerado via Javascript";
    
    document.body.appendChild(novoElemento);
}

