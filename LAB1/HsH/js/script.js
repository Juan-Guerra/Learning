
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



function Inmueble(id, tipo, precio, metros, dormitorios, garage, jardin, anio, cipropietario) {
    this.id = id;
    this.tipo = tipo;
    this.precio = precio;
    this.metros = metros;
    this.dormitorios = dormitorios;
    this.garage = garage;
    this.cipropietario = cipropietario;

    this.jardin = jardin;
    this.anio = anio;
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

function Alquileres(inmueble, arrendatario, fechaInicio, fechaFin) {
    this.inmueble = inmueble;
    this.arrendatario = arrendatario;
    this.fechaInicio = fechaInicio;
    this.fechaFin = fechaFin;
}

function Fecha(dia, mes, anio) {
    this.dia = dia;
    this.mes = mes;
    this.anio = anio;
}




//dirección del servidor
var urlArchivo = "./files/";
var archivoAlquileres = urlArchivo + "alquileres.csv";
var archivoArrendatarios = urlArchivo + "arrendatarios.csv";
var archivoInmuebles = urlArchivo + "inmuebles.csv";
var archivoPropietarios = urlArchivo + "propietarios.csv";


var inmuebles = [];
var alquileres = [];
var casas = [];
var apartamentos = [];
var arrendatarios = [];
var propietarios = [];




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

    for (var i = 0; i < lista.length; i++) {
        var valores = Object.values(lista[i]);
        var inmuebleLindo = new Inmueble(...valores)
        inmuebles.push(inmuebleLindo);
    }

    var atributos = ["id", "precio", "metros", "dormitorios", "garage", "cipropietario", "jardin"];

    for (var i = 0; i < lista.length; i++) {
        if (lista[i].tipo == "CASA") {
            var valores = [];

            for (var j = 0; j < atributos.length; j++) {
                valores.push(lista[i][atributos[j]]);
            }
            var casaLinda = new Casa(...valores)
            casas.push(casaLinda)
        }

    }


    var atributos = ["id", "precio", "metros", "dormitorios", "garage", "anio", "cipropietario"];

    for (var i = 0; i < lista.length; i++) {
        if (lista[i].tipo == "APARTAMENTO") {
            var valores = [];

            for (var j = 0; j < atributos.length; j++) {
                valores.push(lista[i][atributos[j]]);
            }
            var apartamentoLindo = new Apartamento(...valores)

            apartamentos.push(apartamentoLindo)
        }
    }
}


//la funcion cargar aqluileres y me tiene traer el array con los objetos  

function cargarAlquileres(lista) { //esta funcion cargara TODOS los alquileres y debera devolver un array con los objetos


    for (var i = 0; i < lista.length; i++) {
        var datos = [];

        var idInmueble = 0;
        var ciarrendatario = 0;
        var fechaInicio = "";
        var fechaFin = "";

        var idm = lista[i].idinmueble.split("\n");
        var idInmueble = idm[1];

        var cia = lista[i].ciarrendatario.split(";");
        ciarrendatario = cia;

        var fecI = lista[i].fechaInicio;
        fechaInicio = fecI;

        var fecF = lista[i].fechaFin;
        fechaFin = fecF;


        //Busca la "idInmueble" en el array de apartamentos 
        for (var j = 0; j < apartamentos.length; j++) {
            var idApartamento = apartamentos[j].id;
            if (idInmueble == idApartamento) {
                datos.push(apartamentos[j])
            }
        }


        //Busca la "idInmueble" en el array de casas 
        for (var j = 0; j < casas.length; j++) {
            var idCasas = casas[j].id;
            if (idInmueble == idCasas) {
                datos.push(casas[j])
            }
        }


        //ARRENDATARIO    
        for (var e = 0; e < arrendatarios.length; e++) {
            var cedula = arrendatarios[e].ci;

            if (cedula == ciarrendatario) {
                datos.push(arrendatarios[e]);
            }
        }

        //FECHA INICIO
        var fechaFea = fecI.split("/");
        var fi = new Fecha(...fechaFea);

        datos.push(fi)

        //FECHA FIN
        var fechaFea = fecF.split("/");
        var ff = new Fecha(...fechaFea);

        datos.push(ff)

        var alquilerLindo = new Alquileres(...datos);
        alquileres.push(alquilerLindo);
    }

}

function leerdatos(urlArchivo, puntocoma, funcioninyeccion) { //la funcion "leerdatos" (variable urlarchivo, punto y coma, funcion a inyectar)
    $.ajax({ //llamada a ajax
        url: urlArchivo, // key = url : variable urlachivo a leer
        dataType: "text", //tipo de datos "texto"
        success: function (hola) { //"en caso de todo "ok" dentro de "hola" almacena el contenido del "archivo")

            var filas = hola.split("\r");  //va cortando fila a fila
            var cabezal = filas[0]; //cada linea que guarda "filas" es un string
            var cab = cabezal.split(puntocoma);// array con los items del cabezal
            var coleccion = [];

            for (var i = 1; i < filas.length; i++) // recorriendo filas
            {
                var datos = filas[i].split(puntocoma); // array con los items de cada fila *
                var objprueba = new Object();

                for (var u = 0; u < cab.length; u++) { // recorriendo columnas en cada fila
                    var llave = cab[u];
                    var valor = datos[u];

                    objprueba[llave] = valor;
                }
                coleccion.push(objprueba);
            }
            funcioninyeccion(coleccion);
        }
    });
}
leerdatos(archivoArrendatarios, ";", cargarArrendatarios);

leerdatos(archivoPropietarios, ";", cargarPropietarios);

leerdatos(archivoInmuebles, ";", cargarInmuebles);

leerdatos(archivoAlquileres, ";", cargarAlquileres);


var cargarPropietarios = function (lista) {
    for (var i = 0; i < lista.length; i++) {
        var valores = Object.values(lista[i]);
        var propietarioLindo = new Propietario(...valores)
        propietarios.push(propietarioLindo);
    }
}

var cargarInmuebles = function (lista) {

    var atributos = ["id", "precio", "metros", "dormitorios", "garage", "cipropietario", "jardin"];

    for (var i = 0; i < lista.length; i++) {
        if (lista[i].tipo == "CASA") {
            var valores = [];

            for (var j = 0; j < atributos.length; j++) {
                valores.push(lista[i][atributos[j]]);
            }
            var casaLinda = new Casa(...valores)
            casas.push(casaLinda)
        }
    }
}

