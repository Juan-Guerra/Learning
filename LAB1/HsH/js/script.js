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
var urlArchivo = "http://127.0.0.1:8887/LAB1/HsH/files/";
var archivoAlquileres = urlArchivo + "alquileres.csv";
var archivoArrendatarios = urlArchivo + "arrendatarios.csv";
var archivoInmuebles = urlArchivo + "inmuebles.csv";
var archivoPropietarios = urlArchivo + "propietarios.csv";

// console.log(urlArchivo);
// console.log(urlArchivo + "alquileres");

////console.log(archivoAlquileres);
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
    // //console.log(lista);

    var atributos = ["id", "precio", "metros", "dormitorios", "garage", "cipropietario", "jardin"];

    for (var i = 0; i < lista.length; i++) {
        if (lista[i].tipo == "CASA") {
            // //console.log(lista[i])
            var valores = [];

            for (var j = 0; j < atributos.length; j++) {
                ////console.log(atributos[j] + ": " + lista[i][atributos[j]])
                valores.push(lista[i][atributos[j]]);
            }
            var casaLinda = new Casa(...valores)
            casas.push(casaLinda)
        }
    
    }


    var atributos = ["id", "precio", "metros", "dormitorios", "garage", "anio", "cipropietario"];

    for (var i = 0; i < lista.length; i++) {
        if (lista[i].tipo == "APARTAMENTO") {
            //console.log(lista[i])
            var valores = [];

            for (var j = 0; j < atributos.length; j++) {
               //console.log(atributos[j] + ": " + lista[i][atributos[j]])
                valores.push(lista[i][atributos[j]]);
            }
            var apartamentoLindo = new Apartamento(...valores)
            apartamentos.push(apartamentoLindo)
        }
    }
 console.log(apartamentos);
}


//la funcion cargar aqluileres y me tiene traer el array con los objetos  
  
function cargarAlquileres(lista) { //esta funcion cargara TODOS los alquileres y debera devolver un array con los objetos

    for (var i = 0 ; i < lista.length; i++){ // este FOR creara la variable "o" incrementando 
               

        var idinmueble = lista[i].idinmueble; // se declara la variable idInmueble como la "lista" y el resultado de la iteracion de "o"
        var inmu = []; // aqui se crea el array que sera llenado con los objetos que devuelva la funcion
        
        for (var j = 0; j < apartamentos.length; j++){ 
            
             //console.log(apartamentos);
             // ahora hago un FOR y declaro "p" como "0", donde recorrere todo el array "apartamentos" e ire incrementando el valor de "p" en 1
            if (apartamentos[j].id = idinmueble){ // Al haber "p" recorrido "apartamentos", le agrego la propiedad "id" del objetos "inmuebles"...
                //console.log(apartamentos[j])

                }
        }

        for (var k = 0; k < casas.length; k++){
            if (casas[k].id = idinmueble){
                //console.log(casas[k])
                
            }
        }    
    }
}           
  


function leerdatos(urlArchivo, puntocoma, funcioninyeccion) { //la funcion "leerdatos" (variable urlarchivo, punto y coma, funcion a inyectar)
    $.ajax({ //llamada a ajax
        url: urlArchivo, // key = url : variable urlachivo a leer
        dataType: "text", //tipo de datos "texto"
        success: function (hola) { //"en caso de todo "ok" dentro de "hola" almacena el contenido del "archivo")
            
            var filas= hola.split("\r");  //va cortando fila a fila
            var cabezal = filas[0]; //cada linea que guarda "filas" es un string
            var cab = cabezal.split(puntocoma);// array con los items del cabezal
            var coleccion = [];

            for (var i = 1 ; i < filas.length; i++) // recorriendo filas
            {  
                //console.log("------");
                var datos = filas[i].split(puntocoma); // array con los items de cada fila *
                var objprueba = new Object();
                
                for (var u = 0; u < cab.length; u++){ // recorriendo columnas en cada fila
                    var llave = cab[u];                    
                    var valor = datos[u];
                     
                     objprueba[llave]=valor; 
                     //console.log(objprueba);
                    //console.log(llave+ ":" +valor);
                }
                   coleccion.push(objprueba); 
                           
              //console.log(filas[i]);
              //console.log(datos);
            }
             // console.log(cabezal);
              //console.log(cab);
           //console.log(cabezal);
          // console.log(coleccion);
           funcioninyeccion(coleccion);
        }


    });
}
leerdatos(archivoArrendatarios,";",cargarArrendatarios);

leerdatos(archivoPropietarios,";",cargarPropietarios);

leerdatos(archivoInmuebles,";",cargarInmuebles);

leerdatos(archivoAlquileres,";",cargarAlquileres);




























// function LeerArchivo(url, separador) {

//     $.ajax({
//         url: url,
//         dataType: "text",
//         success: function (data) {
//             var lineas = data.split("\r");
//             var cabezera = lineas[0];

//             for (var i = 1; i < lineas.length; i++) {
//                 var valores = lineas[i].split(";");
//                 var cab = cabezera.split(";");

//                 var Objeto = new object();

//                 for (var j = 0; j < cab.length; j++) {
//                     //console.log(valores[1]);

//                 }
//             }
//         }
//     });
// }




function consulta() {
   console.log("--------- PROPIETARIOS ---------")
 console.log(propietarios)
    for (var i = 0; i < propietarios.length; i++) {
        //console.log(propietarios[i])
    }

    console.log("--------- ARRENDATARIOS ---------")
    console.log(arrendatarios)
    for (var i = 0; i < arrendatarios.length; i++) {
        //console.log(arrendatarios[i])
    }

    console.log("--------- APARTAMENTOS ---------")
    console.log(apartamentos)
    for (var i = 0; i < apartamentos.length; i++) {
     //   console.log(apartamentos[i])
    }

    console.log("--------- CASAS ---------")
    console.log(casas)
    for (var i = 0; i < casas.length; i++) {
        //console.log(casas[i])
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
    // //console.log(lista);

    var atributos = ["id", "precio", "metros", "dormitorios", "garage", "cipropietario", "jardin"];

    for (var i = 0; i < lista.length; i++) {
        if (lista[i].tipo == "CASA") {
            // //console.log(lista[i])
            var valores = [];

            for (var j = 0; j < atributos.length; j++) {
                ////console.log(atributos[j] + ": " + lista[i][atributos[j]])
                valores.push(lista[i][atributos[j]]);
            }
            var casaLinda = new Casa(...valores)
            casas.push(casaLinda)
        }
    }
}







    




/*function cargador(url, separador, funcion) {
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
            // //console.log(col)
        }
    });
}*/


//cargador(archivoArrendatarios, ";", cargarArrendatarios);
// cargador(archivoPropietarios, ";", cargarPropietarios);
// cargador(archivoInmuebles, ";", cargarInmuebles);
// cargador(archivoAlquileres, ";", cargarAlquileres);

// LeerArchivo(archivoAlquileres, alquileres, ";", "ALQUILERES");
// LeerArchivo(archivoArrendatarios, arrendatarios, ";");
// LeerArchivo(archivoInmuebles, inmuebles, ";", "INMUEBLES");
// LeerArchivo(archivoPropietarios, propietarios, ";", "PROPIETARIOS");


