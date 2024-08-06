var num = 0;
var operacao = 0;
var resultado = 0;



function soma() {
   num = document.getElementById("display").value;
   document.getElementById("display").value = "";
   document.getElementById("display").focus();
   operacao = 1;
}

function subtracao() {
    num = document.getElementById("display").value;
    document.getElementById("display").value = "";
    document.getElementById("display").focus();

    operacao = 2;
}

function multiplicacao() {
    num = document.getElementById("display").value;
    document.getElementById("display").value = "";
    document.getElementById("display").focus();

    operacao = 3;
}
function divisao() {
    num = document.getElementById("display").value;
    document.getElementById("display").value = "";
    document.getElementById("display").focus();

    operacao = 4;
}

function total(){
    if (operacao == 1){
        resultado = parseInt(num) + parseInt(document.getElementById("display").value)
    } else if (operacao == 2){
        console.log(parseInt(num) - parseInt(document.getElementById("display").value))
        resultado = parseInt(num) - parseInt(document.getElementById("display").value)
    } else if (operacao == 3){
        resultado = parseInt(num) * parseInt(document.getElementById("display").value)
    } else if (operacao == 4){
        resultado = parseInt(num) / parseInt(document.getElementById("display").value)
    }

    document.getElementById("display").value = resultado
    document.getElementById("display").focus;

}
document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        total()
    }
})