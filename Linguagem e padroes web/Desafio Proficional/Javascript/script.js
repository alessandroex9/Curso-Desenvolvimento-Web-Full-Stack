// Variável global que busca o elemento do "Visor" - input readonly do HTML
let inputResultado = document.getElementById("inputCalculadora");

// Objeto que registra os valores e funções do cálculo
let calculo = {
    valorSalvo: null,
    funcaoParaCalcular: null
};

// Ao carregar a página, atribui eventos aos botões por meio dos seus identificadores (ids)
window.addEventListener("load", function() {
    atribuirEventos();
});

function atribuirEventos() {
    // Atribuir eventos aos números
    document.getElementById("btnValor0").addEventListener("click", inserirNumero);
    document.getElementById("btnValor1").addEventListener("click", inserirNumero);
    document.getElementById("btnValor2").addEventListener("click", inserirNumero);
    document.getElementById("btnValor3").addEventListener("click", inserirNumero);
    document.getElementById("btnValor4").addEventListener("click", inserirNumero);
    document.getElementById("btnValor5").addEventListener("click", inserirNumero);
    document.getElementById("btnValor6").addEventListener("click", inserirNumero);
    document.getElementById("btnValor7").addEventListener("click", inserirNumero);
    document.getElementById("btnValor8").addEventListener("click", inserirNumero);
    document.getElementById("btnValor9").addEventListener("click", inserirNumero);

    // Atribuir eventos aos botões de operadores, ponto e resultado
    document.getElementById("btnPonto").addEventListener("click", inserirPonto);
    document.getElementById("btnSoma").addEventListener("click", clicarOperador);
    document.getElementById("btnDividir").addEventListener("click", clicarOperador);
    document.getElementById("btnMultiplicar").addEventListener("click", clicarOperador);
    document.getElementById("btnSubtrair").addEventListener("click", clicarOperador);
    document.getElementById("btnLimpar").addEventListener("click", limparDados);
    document.getElementById("btnResultado").addEventListener("click", clicarResultado);
}

// Adiciona o número no visor
function inserirNumero() {
    // Se o valor não for um número, substitui pelo valor do conteúdo do botão
    if (isNaN(Number(inputResultado.value))) {
        inputResultado.value = event.target.textContent;
    } else {
        // Se o valor for zero, substitui o valor do visor pelo número clicado
        if (inputResultado.value === "0") {
            inputResultado.value = event.target.textContent;
        } else {
            inputResultado.value += event.target.textContent;
        }
    }
}

// Operação de soma
function somar(valor1, valor2) {
    return valor1 + valor2;
}

// Operação de subtração
function subtrair(valor1, valor2) {
    return valor1 - valor2;
}

// Operação de multiplicação
function multiplicar(valor1, valor2) {
    return valor1 * valor2;
}

// Operação divisão
function dividir(valor1, valor2) {
    if (valor2 === 0) {
        return "Erro, não é possível dividir um número por zero!";
    } else {
        return valor1 / valor2;
    }
}

// Limpar o visor e os dados do cálculo
function limparDados() {
    inputResultado.value = "";
    calculo.valorSalvo = null;
    calculo.funcaoParaCalcular = null;
}

// Insere o ponto para casas decimais
function inserirPonto() {
    if (inputResultado.value === "" || isNaN(Number(inputResultado.value))) {
        inputResultado.value = "0.";
    } else if (!inputResultado.value.includes(".")) {
        inputResultado.value = inputResultado.value + ".";
    }
}

// Atribuir a função de acordo com o tipo de operador clicado
function clicarOperador() {
    if (!isNaN(Number(inputResultado.value))) {
        if (calculo.valorSalvo === null) {
            calculo.valorSalvo = Number(inputResultado.value);
        } else if (calculo.funcaoParaCalcular !== null) {
            calculo.valorSalvo = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResultado.value));
        }
    }
    let operador = event.target.textContent;
    atribuirOpreracao(operador);
    inputResultado.value = operador;
}

// Exibir resultados no visor
function clicarResultado() {
    if (!isNaN(Number(inputResultado.value)) && calculo.funcaoParaCalcular !== null) {
        let resultado = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResultado.value));
        inputResultado.value = resultado;
        calculo.valorSalvo = resultado;
        calculo.funcaoParaCalcular = null;
    }
}
