

  function Propietarios (ci,nombre,apellido,estado,sexo){
  this.ci=ci;
  this.nombre=nombre;
  this.apellido=apellido;
  this.estado=estado;
  this.sexo=sexo;
};

function Arrendatarios (ci,nombre,apellido,estado,sexo,garantia){
  this.ci=ci;
  this.nombre=nombre;
  this.apellido=apellido;
  this.estado=estado;
  this.sexo=sexo;
  this.garantia=garantia;
};

function Alquileres (idinmueble,ciarrendatario,fechaini,fechafin){
  this.idinmueble=idinmueble;
  this.ciarrendatario=ciarrendatario;
  this.fechaini=fechaini;
  this.fechafin=fechafin;
};

function Inmuebles (id,tipo,precio,metros,dormitorios,garage,jardin,anio,cipropietario){
  this.id=id;
  this.tipo=tipo;
  this.precio=precio;
  this.metros=metros;
  this.dormitorios=dormitorios;
  this.garage=garage;
  this.jardin=jardin;
  this.anio=anio;
  this.cipropietario=cipropietario;
};

// tipo puede ser apartamento(año) o casa (con jardin)

var filePropietarios = [];
var fileArrendatarios = [];
var fileAlquileres = [];
var fileInmuebles = [];


var Propietarios = new Propietarios ([filePropietarios]);
var Arrendatarios = new Arrendatarios ([fileArrendatarios]);
var Alquileres = new Alquileres ([fileAlquileres]);
var Inmuebles = new Inmuebles ([fileInmuebles]);

var attrs = Object.Keys(miobjeto);
for (var i =0; i < attrs.lenght; i++){
       var value = manuel [attr[i]]; // codigo magico que devolvera tanto los valores, como las keys de cada objeto!


       // para agregar metodos....
      /* function Estudiante {
                                   this.nombre = nombre;
                                   this.getNombreCompleto= function( METODO) {
                                                        return this.nombre+this.apellido;}
                                                      };*/



// consulta A
function A (inmuebles.metros, inmuebles.precio){

          if (metros < 60) && (precio < 10000);
}

console.log (A);

//-----------------------------------------------------

function B (propietarios.sexo , propietarios.estado){
  if (sexo = F) && (estado=S)
};

console.log (B);

//-------------------------------------------------------

function C (inmuebles.precio, alquileres.idinmueble){
  if (precio > 10000) && (idinmueble = alquilado)
};

console.log (C);

//-------------------------------------------------------

function D (alquileres.idinmueble,arrendatarios.garantia){
  if (idinmueble = alquilado) && (idinmueble.garantia = si)
};

console.log(D);

//-------------------------------------------------------------
//Apartamento alquilado, con propietario y arrendatario soltero.
function E (idinmueble.tipo.SIalquilado,arrendatario.SIalquilado,arrendatario.estado.soltero){
  if (idinmueble = cipropietario) && (idinmueble = propietario);
}

console.log(E);

//Las personas solteras que alquilaron un apartamento de más de $15000.


function F (arrendatarios.sexo.Soltero, inmueble.tipo.apartamento){
        if (arrendatarios.sexo.Soltero = SI) && (inmueble.tipo.apartamento.precio < 15000)

        console.log(F); };

//---Arrendatarios que se les vence el alquiler en 2017

function G (alquileres.fechafin){if (alquileres.fechafin > fechafin)};
console.log(G);

//---------


function ()


/*var fs = require('fs');
const util=require('util');

fs.readFile('alquileres.csv','utf-8',(err, data)){
  if (err) throw err;
  console.log(data);

});

// Probar el siguiente codigo para extraer propiedades del los objetos y asi, ir viendo las consultas...

}

/*function reading(error, data){

   if (error)
   return
   console.log('error':, error)
   else
    console.log('data':, data);
  };

    console.log(util.inspect('alquileres.csv', false, null)); //aqui intento leer un solo archivo de los 4...

    const util = require('util');

console.log();*/


// SE PRECISA UN OBJETO GIGANTE LLAMADO "ALQUILERES" DONDE VA METIDO TODOOOO
// Hay un objeto llamado "FECHA que SON DOS: "fechaini" y "fechafin" (ambos deben ser desglosados en: dia , mes , año)
//
