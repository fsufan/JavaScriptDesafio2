var selectpin1 = document.querySelector("#pin1")
var selectpin2 = document.querySelector("#pin2")
var selectpin3 = document.querySelector("#pin3")

var parrafoRespuesta = document.querySelector(".resultado")


function validarPassword(){
    var pin1 = selectpin1.value;
    var pin2 = selectpin2.value;
    var pin3 = selectpin3.value;
    var password = pin1 + pin2 + pin3;

    if(password == "911"){
        parrafoRespuesta.innerHTML = "Password 1 Correcto";
    }else if(password == "714"){
        parrafoRespuesta.innerHTML = "Password 2 Correcto";
    }else{
        parrafoRespuesta.innerHTML = "Password Incorrecta";
    }
}