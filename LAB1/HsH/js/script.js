function Persona(ci, nombre, apellido, estado_civil, sexo) {
    this.ci = ci;
    this.nombre = nombre;
    this.apellido = apellido;
    this.estado_civil = estado_civil;
    this.sexo = sexo;
}

Arrendatario.prototype = new Persona();
Arrendatario.prototype.constructor = Arrendatario;
Arrendatario.prototype.parent = Persona.prototype;

function Arrendatario(ci, nombre, apellido, estado_civil, sexo, garantia) {
    this.ci = ci;
    this.nombre = nombre;
    this.apellido = apellido;
    this.estado_civil = estado_civil;
    this.sexo = sexo;
    this.garantia = garantia;
}














//dirección del servidor
var urlServer = "http://127.0.0.1:8887/LAB1/HsH/files/";
var archivoAlquileres = urlServer + "alquileres.csv";
var archivoArrendatarios = urlServer + "arrendatarios.csv";
var archivoInmuebles = urlServer + "inmuebles.csv";
var archivoPropietarios = urlServer + "propietarios.csv";

//console.log(archivoAlquileres);
var alquileres = [];
var arrendatarios = [];
var inmuebles = [];
var propietarios = [];

function LeerArchivo(url, col, separador) {

    $.ajax({
        url: url,
        dataType: "text",
        success: function (data) {
            console.log(data);
            var lineas = data.split("\r");
            var cabezera = lineas[0];
            console.log(cabezera)

            for (var i = 1; i < lineas.length; i++) {
                var valores = lineas[i].split(";");
                var cab = cabezera.split(";");
                //console.log(cab)

                for (var j = 0; j < cab.length; j++) {
                    console.log(valores[1])
                }
            }
        }
    });
}


// Personas = [
//     personita{
//     nombre: nombre;
//     apellido: apellido;
// },
// personita{
//     nombre: nombre;
//     apellido: apellido;
// }
// ]

var cargarPersonas = function () {

}

//LeerArchivo(archivoAlquileres, alquileres, ";", "ALQUILERES");
LeerArchivo(archivoArrendatarios, arrendatarios, ";");
    // LeerArchivo(archivoInmuebles, inmuebles, ";", "INMUEBLES");
    // LeerArchivo(archivoPropietarios, propietarios, ";", "PROPIETARIOS");


