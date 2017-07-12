function Persona(nombre,apellido,ci,estado,sexo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.ci = ci;
    this.estado = estado;
    this.sexo = sexo;
}

Arrendatario.prototype = new Persona();
Arrendatario.prototype.constructor = Arrendatario;
Arrendatario.prototype.parent = Persona.prototype;

function Arrendatario(ci, nombre, apellido, estado, sexo, garantia) {
    this.ci = ci;
    this.nombre = nombre;
    this.apellido = apellido;
    this.estado_civil = estado_civil;
    this.sexo = sexo;
    this.garantia = garantia;
}

function Inmuebles (id,tipo,precio,metros,dormitorios,garage,jardin,anio,propietario){
    this.id=id;
    this.tipo=tipo;
    this.precio=precio;
    this.metros=metros;
    this.dormitorios=dormitorios;
    this.garage=garage;
    this.jardin=jardin;
    this.anio=anio;
    this.propietario=propietario;
}

//dirección del servidor
var urlServer = "http://127.0.0.1:8887/C:\Users\Juan\Desktop\Lab1\LAB1\Datos";
var archivoAlquileres = urlServer + "alquileres.csv";
var archivoArrendatarios = urlServer + "arrendatarios.csv";
var archivoInmuebles = urlServer + "inmuebles.csv";
var archivoPropietarios = urlServer + "propietarios.csv";

//console.log(archivoAlquileres);
var arrayAlquileres = [];
var arrayInmuebles = [];
var arrayPersonas = [];
var arrayArrendatarios = [];


function LeerArchivo(url, col, separador) {

    $.ajax({
        url: url,
        dataType: "text",
        success: function (data) {
            console.log(data);
            var lineas = data.split("\r");
            var cabecera = lineas[0];
            console.log(cabecera)

            for (var i = 1; i < lineas.length; i++) {
                var valores = lineas[i].split(";");
                var cab = cabecera.split(";");
                //console.log(cab)

                for (var j = 0; j < cab.length; j++) {
                    console.log(valores[1])
                }
            }
        }
    });
}

LeerArchivo(archivoAlquileres, alquileres, ";", "ALQUILERES");


LeerArchivo(archivoArrendatarios, arrendatarios, ";");

LeerArchivo(archivoInmuebles, inmuebles, ";", "INMUEBLES");{ // primera consulta 
    
     
    // var valores = Object.Values(archivoInmuebles);

    // for (var i = 1; i < valores.lenght; i++){if  
     //  valores < 10000 [valores[i]]; 
     //  }};

LeerArchivo(archivoPropietarios, propietarios, ";", "PROPIETARIOS");

var cargarPersonas = function (Personas){ 
  for (var i = 1; i < valores.length; i++){ 
    if                       
}

var cargarAlquileres = function (Alquileres){ 
  for (var i = 1; i < valores.length; i++){
}
///// consulta A

  var valores = Object.Values(archivoInmuebles);

  var cargarInmuebles = function (Inmuebles){ 
  for (var i = 1; i < valores.length; i++){
    if (Object.Values.precio[i] < 10000 && Object.Values.metros[i]>60){
        arrayInmuebles.push([valores]);
    }
  }
  console.log(arrayInmuebles);
  //---------------------------------------------------------------------------

  var cargarArrendatarios = function (Arrendatarios){ 
  for (var i = 1; i < valores.length; i++){
  }