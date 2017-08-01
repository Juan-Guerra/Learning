function ingresar() {
    var nombre = $("#nombre").val();
    var clave = $("#clave").val();



    if (clave == "1234") {
        $("#usuario").text(nombre);
        desactivarModalLogin();
    } else {
        alert("Contraseña incorrecta");

    }
}



function desactivarModalLogin() {

    $(".ingresar").animate({
        opacity: "0"
    }, 1000, function(){
          $(".ingresar").css("display","none");
    });
}
