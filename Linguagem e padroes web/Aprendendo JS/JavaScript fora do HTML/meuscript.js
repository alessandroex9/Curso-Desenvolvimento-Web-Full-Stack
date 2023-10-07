document.getElementById("paragrafo").innerHTML = "Hello World JavaScript!";

var objt1 = document.getElementById("paragrafo2");
var n1 = 100;

var objt2 = document.getElementById("paragrafo3");

function funcaosoma(num1){
    var x = num1 +3;
    return x;
}

//objt1.innerHTML = funcaosoma(n1);

function funcaoadicionatitulo(){
    return objt1.innerHTML = "<h1> Aperte no Botão </h1>";
}

//Criando a funcao do botão
function botao(){
    return objt2.innerHTML = "<h1>Voce apertou no Botão!</h1>"
}