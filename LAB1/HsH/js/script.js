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

Propietario.prototype = new Persona();
Propietario.prototype.constructor = Propietario;
Propietario.prototype.parent = Persona.prototype;
function Propietario(ci, nombre, apellido, estado_civil, sexo) {
    this.ci = ci;
    this.nombre = nombre;
    this.apellido = apellido;
    this.estado_civil = estado_civil;
    this.sexo = sexo;
}



function Inmueble(id, precio, metros, dormitorios, garage, cipropietario) {
    this.id = id;
    this.precio = precio;
    this.metros = metros;
    this.dormitorios = dormitorios;
    this.garage = garage;
    this.cipropietario = cipropietario;
}


Casa.prototype = new Inmueble();
Casa.prototype.constructor = Casa;
Casa.prototype.parent = Inmueble.prototype;
function Casa(id, precio, metros, dormitorios, garage, cipropietario, jardin) {
    this.id = id;
    this.precio = precio;
    this.metros = metros;
    this.dormitorios = dormitorios;
    this.garage = garage;
    this.cipropietario = cipropietario;
    this.jardin = jardin;
}

Apartamento.prototype = new Apartamento();
Apartamento.prototype.constructor = Casa;
Apartamento.prototype.parent = Apartamento.prototype;
function Apartamento(id, precio, metros, dormitorios, garage, anio, cipropietario) {
    this.id = id;
    this.precio = precio;
    this.metros = metros;
    this.dormitorios = dormitorios;
    this.garage = garage;
    this.anio = anio;
    this.cipropietario = cipropietario;
}






//dirección del servidor
var urlServer = "http://127.0.0.1:8887/LAB1/HsH/files/";
var archivoAlquileres = urlServer + "alquileres.csv";
var archivoArrendatarios = urlServer + "arrendatarios.csv";
var archivoInmuebles = urlServer + "inmuebles.csv";
var archivoPropietarios = urlServer + "propietarios.csv";

//console.log(archivoAlquileres);
var alquileres = [];
var casas = [];
var apartamentos = [];
var arrendatarios = [];
var propietarios = [];

function LeerArchivo(url, separador) {

    $.ajax({
        url: url,
        dataType: "text",
        success: function (data) {
            var lineas = data.split("\r");
            var cabezera = lineas[0];

            for (var i = 1; i < lineas.length; i++) {
                var valores = lineas[i].split(";");
                var cab = cabezera.split(";");

                var Objeto = new object();

                for (var j = 0; j < cab.length; j++) {
                    console.log(valores[1]);

                }
            }
        }
    });
}




function consulta() {
    console.log("--------- PROPIETARIOS ---------")
    // console.log(propietarios)
    for (var i = 0; i < propietarios.length; i++) {
        console.log(propietarios[i])
    }

    console.log("--------- ARRENDATARIOS ---------")
    // console.log(propietarios)
    for (var i = 0; i < arrendatarios.length; i++) {
        console.log(arrendatarios[i])
    }

    console.log("--------- APARTAMENTOS ---------")
    // console.log(propietarios)
    for (var i = 0; i < apartamentos.length; i++) {
        console.log(apartamentos[i])
    }

    console.log("--------- CASAS ---------")
    // console.log(propietarios)
    for (var i = 0; i < casas.length; i++) {
        console.log(casas[i])
    }

}


var cargarArrendatarios = function (lista) {
    for (var i = 0; i < lista.length; i++) {
        var valores = Object.values(lista[i]);
        var arrendatarioLindo = new Arrendatario(...valores)
        arrendatarios.push(arrendatarioLindo)
    }
}

var cargarPropietarios = function (lista) {
    for (var i = 0; i < lista.length; i++) {
        var valores = Object.values(lista[i]);
        var propietarioLindo = new Propietario(...valores)
        propietarios.push(propietarioLindo);
    }
}


var cargarInmuebles = function (lista) {
    // console.log(lista);

    var atributos = ["id", "precio", "metros", "dormitorios", "garage", "cipropietario", "jardin"];

    for (var i = 0; i < lista.length; i++) {
        if (lista[i].tipo == "CASA") {
            // console.log(lista[i])
            var valores = [];

            for (var j = 0; j < atributos.length; j++) {
                //console.log(atributos[j] + ": " + lista[i][atributos[j]])
                valores.push(lista[i][atributos[j]]);
            }
            var casaLinda = new Casa(...valores)
            casas.push(casaLinda)
        }
    }


    var atributos = ["id", "precio", "metros", "dormitorios", "garage", "anio", "cipropietario"];

    for (var i = 0; i < lista.length; i++) {
        if (lista[i].tipo == "APARTAMENTO") {
            // console.log(lista[i])
            var valores = [];

            for (var j = 0; j < atributos.length; j++) {
                //console.log(atributos[j] + ": " + lista[i][atributos[j]])
                valores.push(lista[i][atributos[j]]);
            }
            var apartamentoLindo = new Apartamento(...valores)
            apartamentos.push(apartamentoLindo)
        }
    }

}


function cargarAlquileres(lista) {
    //  console.log(lista);

    for (var i = 0; i < lista.length; i++) {
         console.log(lista[i])
        var idinmueble = lista[i].idinmueble;
        var inmu = [];
        // console.log(idinmueble);
        for (var j = 0; j < apartamentos.length; j++) {
            if (apartamentos[j].id = idinmueble){
                // console.log(apartamentos[j])
                
            }
        }

    }

}

function cargador(url, separador, funcion) {
    $.ajax({
        url: url,
        dataType: "text",
        success: function (data) {
            var lineas = data.split("\r");
            var cabezera = lineas[0];
            var col = [];
            for (var i = 1; i < lineas.length; i++) {
                var valores = lineas[i].split(";");
                var cab = cabezera.split(";");
                var Objeto = new Object();
                for (var j = 0; j < cab.length; j++) {
                    Objeto[cab[j]] = valores[j];
                }
                col.push(Objeto);
            }
            funcion(col);
            // console.log(col)
        }
    });
}


cargador(archivoArrendatarios, ";", cargarArrendatarios);
cargador(archivoPropietarios, ";", cargarPropietarios);
cargador(archivoInmuebles, ";", cargarInmuebles);
cargador(archivoAlquileres, ";", cargarAlquileres);

// LeerArchivo(archivoAlquileres, alquileres, ";", "ALQUILERES");
// LeerArchivo(archivoArrendatarios, arrendatarios, ";");
// LeerArchivo(archivoInmuebles, inmuebles, ";", "INMUEBLES");
// LeerArchivo(archivoPropietarios, propietarios, ";", "PROPIETARIOS");


