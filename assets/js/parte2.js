var inputGithub = document.querySelector("#cantidadGithub");
var inputSlack = document.querySelector("#cantidadSlack");
var inputGit = document.querySelector("#cantidadGit");
var spancantidad = document.querySelector("#cantidadTotal");

function calculoSticker(){

    var cantidadGitHub = parseInt(inputGithub.value);
    var cantidadSlack = Number(inputSlack.value);
    var cantidadGit = Number(inputGit.value);

    var cantidadTotal = cantidadGitHub + cantidadSlack + cantidadGit;

    if(cantidadTotal <= 10){
        spancantidad.innerHTML = cantidadTotal;
    }else{
        spancantidad.innerHTML = "demasiados";
    }

}
