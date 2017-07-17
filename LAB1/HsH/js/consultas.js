
function cargarTabla(sheison, caption) {

    var attrs = Object.keys(sheison[0]);
    var th = "<tr>" + thead(attrs) + "</tr>";
    var td = "";

    for (var i = 0; i < sheison.length; i++) {
        var vals = Object.values(sheison[i]);
        td = td + "<tr>" + tbody(vals) + "</tr>";
    }

    var tabla = `
        <caption>`+ caption + `</caption>
        <head>` + th + `</thead>
        <tbody>`+ td + `</tbody>
    `
    // console.log(tabla)
    $(".table").html(tabla);


    function thead(lista) {
        var head = "";
        for (var i = 0; i < lista.length; i++) {
            head = head + "<th>" + lista[i] + "</th>";
        }
        return head;
    }
    function tbody(lista) {
        var body = "";
        for (var i = 0; i < lista.length; i++) {
            body = body + "<td>" + lista[i] + "</td>";
        }
        return body;
    }
}


function cargarTablaPro(sheisonPro, caption) {
    var coleccion = [];
    var valores = ["id", "ci", "dia", "mes", "anio", "dia", "mes", "anio"];


    for (var i = 0; i < sheisonPro.length; i++) {
        var keys = Object.keys(sheisonPro[i]);

        console.log(keys)

        for (var j = 0; j < keys.length; j++) {
            console.log(sheisonPro[i][keys[j]]);


        }
    }
}



//consulas GENERALES
function consultaAlquileres() {

    cargarTablaPro(alquileres, "Lista de Alquileres");
}

function consultaPropietarios() {
    cargarTabla(propietarios, "Lista de Propietarios");
}

function consultaArrendatarios() {
    cargarTabla(arrendatarios, "Lista de Arrendatarios");
}

function consultaApartamentos() {
    cargarTabla(apartamentos, "Lista de Apartamentos");
}

function consultaCasas() {
    cargarTabla(casas, "Lista de Casas");
}



//consultas COMPLEJAS


//Propietarios solteros de sexo femenino.
function consulta1() {
    var consulta = [];
    for (var i = 0; i < propietarios.length; i++) {
        var sexo = propietarios[i].sexo;
        if (sexo == "M") {
            consulta.push(propietarios[i])
        }
    }
    console.log(consulta)
    cargarTabla(consulta, "Propietarios solteros de sexo femenino.");
}


//Inmuebles de menos de 60 metros cuadrados con un precio mayor a $10000.
function consulta5() {
    var consulta = [];
    var inmuebles = [apartamentos, casas];

    for (var i = 0; i < inmuebles.length; i++) {
        for (var j = 0; j < inmuebles[i].length; j++) {

            var metros = inmuebles[i][j].metros;
            var precio = inmuebles[i][j].precio;

            if ((metros < 60) && (precio > 10000)) {
                consulta.push(inmuebles[i][j])
            }
        }
    }
    console.log(consulta)
    cargarTabla(consulta, "Inmuebles de menos de 60 metros cuadrados con un precio mayor a $10000.");
}