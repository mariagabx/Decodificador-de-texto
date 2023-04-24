
function criptografar() {

    var frase =  document.getElementById("inputTexto").value.toLowerCase();

    var textoCriptografado = frase.replace(/e/img, "enter");
    var textoCriptografado = textoCriptografado.replace(/i/img, "imes");
    var textoCriptografado = textoCriptografado.replace(/a/img, "ai");
    var textoCriptografado = textoCriptografado.replace(/o/img, "ober");
    var textoCriptografado = textoCriptografado.replace(/u/img, "ufat");

    document.getElementById("imgDireita").style.display = "none";
    document.getElementById("texto1").style.display = "none";
    document.getElementById("copy").style.display = "show";
    document.getElementById("texto2").innerHTML = textoCriptografado;
    document.getElementById("inputTexto").innerHTML = " ";
    document.getElementById("copy").style.display = "inherit";

}

function descriptografar() {

    var frase =  document.getElementById("inputTexto").value.toLowerCase();

    var textoCriptografado = frase.replace(/enter/img, "e");
    var textoCriptografado = textoCriptografado.replace(/imes/img, "i");
    var textoCriptografado = textoCriptografado.replace(/ai/img, "a");
    var textoCriptografado = textoCriptografado.replace(/ober/img, "o");
    var textoCriptografado = textoCriptografado.replace(/ufat/img, "u");

        document.getElementById("imgDireita").style.display = "none";
        document.getElementById("texto1").style.display = "none";
        document.getElementById("copy").style.display = "show";
        document.getElementById("texto2").innerHTML = textoCriptografado;
        document.getElementById("inputTexto").innerHTML = " ";
        document.getElementById("copy").style.display = "inherit";
}

function copiar() {


    var botaoCopiar = document.querySelector("#copy");


    botaoCopiar.addEventListener("click",()=>{    
    var textoCopiado = document.querySelector("#texto2").value;
    navigator.clipboard.writeText(textoCopiado);
});

}