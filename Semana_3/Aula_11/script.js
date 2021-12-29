/*
function validaNumeroPar() {
    var numeroDigitado = document.getElementById("numero").value;

    if(numeroDigitado != "" && numeroDigitado != 0) {
        var resto = numeroDigitado%2;
        if(resto==0) {
            document.getElementById("resultado").innerHTML = "O número é par";
        }

        else {
            document.getElementById("resultado").innerHTML = "O número é ímpar";
        }
    }
}
*/

function enviaValor() {
    var numeroDigitado = document.getElementById("numero").value;

        if(numeroPar(numeroDigitado) === 1) {
            document.getElementById("resultado").innerHTML = "O número é par";
        }

        else {
            document.getElementById("resultado").innerHTML = "O número é ímpar";
        }
    }


function numeroImparPar(numero) {

    if(typeof numero === "number") {
        var resto = numero%2;

        if(resto == 0) {
            return 1;
        }

        else {
            return 2;
        }
    }
    else {
        return 3;
    }
}