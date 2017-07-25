
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


function fechas(fechaA, fechaB) {
    console.log("FechaA: " + fechaA.dia + "/" + fechaA.mes + "/" + fechaA.anio);
    console.log("fechaB: " + fechaB.dia + "/" + fechaB.mes + "/" + fechaB.anio);
    console.log("\n")


    if (fechaA.anio > fechaB.anio) {
        console.log("1-FechaA es mayor que FechaB");
        return 1;
    } else {
        if (fechaA.anio == fechaB.anio) {
            if (fechaA.mes > fechaB.mes) {
                console.log("2-FechaA es mayor que FechaB");
                return 1;
            } else {
                if (fechaA.mes == fechaB.mes) {
                    if (fechaA.dia > fechaB.dia) {
                        console.log("3-FehaA es mayor que FechaB");
                        return 1;
                    } else {
                        if (fechaA.dia == fechaB.dia) {
                            console.log("4-FechaA es igual que FechaB");
                            return 0;
                        } else {
                            console.log("5-FechaA es menor que FechaB");
                            return -1;
                        }
                    }
                } else {
                    console.log("6-FechaA es menor que FechaB");
                    return -1;
                }
            }
        } else {
            console.log("7-FechaA es menor que FechaB");
            return -1;
        }
    }

}








//consulas GENERALES
function consultaAlquileres() {
    var consulta = [];

    for (var i = 0; i < alquileres.length; i++) {
        var idInmueble = alquileres[i].inmueble.id;
        var ciArrendatario = alquileres[i].arrendatario.ci;

        var diaI = alquileres[i].fechaInicio.dia;
        var mesI = alquileres[i].fechaInicio.mes;
        var anioI = alquileres[i].fechaInicio.anio;
        var fechaInicio = diaI + "/" + mesI + "/" + anioI;

        var diaF = alquileres[i].fechaFin.dia;
        var mesF = alquileres[i].fechaFin.mes;
        var anioF = alquileres[i].fechaFin.anio;
        var fechaFin = diaF + "/" + mesF + "/" + anioF;

        var alquiler = new Object();
        alquiler["ID Inmueble"] = idInmueble;
        alquiler["CI Arrendatario"] = ciArrendatario;
        alquiler["Fecha Inicio"] = fechaInicio;
        alquiler["Fecha Fin"] = fechaFin;

        consulta.push(alquiler);
    }
    cargarTabla(consulta, "Lista de Alquileres");
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
        var estado = propietarios[i].estado_civil;
        if ((sexo == "F") && (estado == "SOLTERO")) {
            consulta.push(propietarios[i])
        }
    }
    console.log(consulta)
    cargarTabla(consulta, "Propietarios solteros de sexo femenino.");
}



// Las personas solteras que alquilaron un apartamento de más de $15000.
function consulta2() {
    var consulta = [];
    for (var i = 0; i < alquileres.length; i++) {
        var idInmueble = alquileres[i].inmueble.id;

        for (var j = 0; j < apartamentos.length; j++) {
            var idApartamento = apartamentos[j].id;
            if (idInmueble == idApartamento) {
                var precio = apartamentos[j].precio;
                if (precio > 15000) {
                    var estado = alquileres[i].arrendatario.estado_civil;
                    if (estado == "SOLTERO") {
                        var ci = alquileres[i].arrendatario.ci;
                        for (var k = 0; k < arrendatarios.length; k++) {
                            var ciA = arrendatarios[k].ci;
                            if (ci == ciA) {
                                consulta.push(arrendatarios[k])
                            }
                        }
                    }
                }
            }
        }

    }
    cargarTabla(consulta, "Las personas solteras que alquilaron un apartamento de más de $15000.")
}

//Arrendatarios que se les vence el alquiler en 2017.
function consulta3() {
    var consulta = [];
    for (var i = 0; i < alquileres.length; i++) {
        var fechaF = alquileres[i].fechaFin;
        if (fechaF.anio == "17") {
            var ciArrendatario = alquileres[i].arrendatario.ci;;
            for (var j = 0; j < arrendatarios.length; j++) {
                var ci = arrendatarios[j].ci;
                if (ci == ciArrendatario) {
                    console.log(arrendatarios[j])
                    consulta.push(arrendatarios[j])
                }
            }
        }
    }
    cargarTabla(consulta, "Arrendatarios que se les vence el alquiler en 2017.");
}


//Propietario con el alquiler más antiguo.
function consulta4() {
    var consulta = [];

    var fechaAntigua = {
        dia: Infinity,
        mes: Infinity,
        anio: Infinity
    }

    var contador = 0;

    for (var i = 0; i < alquileres.length; i++) {
        var fechaInicio = alquileres[i].fechaInicio;
        var antiguedad = fechas(fechaAntigua, fechaInicio);

        if (antiguedad == 1) {
            fechaAntigua.dia = fechaInicio.dia;
            fechaAntigua.mes = fechaInicio.mes;
            fechaAntigua.anio = fechaInicio.anio;

            contador = i;
        }

        console.log("------------------")
    }

    var ciPro = alquileres[contador].inmueble.cipropietario;
    for (var i = 0; i < propietarios.length; i++) {
        var ciPropietario = propietarios[i].ci;

        if (ciPropietario == ciPro) {
            console.log(propietarios[i]);
            consulta.push(propietarios[i]);
        }

    }

    cargarTabla(consulta, "Propietario con el alquiler más antiguo.");
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
    cargarTabla(consulta, "Inmuebles de menos de 60 metros cuadrados con un precio mayor a $10000.");
}



//Inmueble alquilado, de más de $10000.
function consulta6() {
    var consulta = [];
    for (var i = 0; i < alquileres.length; i++) {
        var precio = alquileres[i].inmueble.precio;
        if (parseInt(precio) > 10000) {
            var idInmueble = alquileres[i].inmueble.id;
            for (var j = 0; j < inmuebles.length; j++) {
                var idInmu = inmuebles[j].id;
                if (idInmu == idInmueble) {
                    consulta.push(inmuebles[j])
                }
            }
        }
    }
    cargarTabla(consulta, "Inmueble alquilado, de más de $10000.");
}


//Inmueble alquilado, con garantia “Contaduria”.
function consulta7() {
    var consulta = [];

    for (var i = 0; i < alquileres.length; i++) {
        var garantia = alquileres[i].arrendatario.garantia;
        if (garantia == "CONTADURIA") {
            var idInmueble = alquileres[i].inmueble.id;
            for (var j = 0; j < inmuebles.length; j++) {
                var idInmu = inmuebles[j].id;
                if (idInmu == idInmueble) {
                    consulta.push(inmuebles[j])
                }
            }
        }
    }
    console.log(consulta);
    cargarTabla(consulta, "Inmueble alquilado, con garantia “Contaduria”.");
}



//Inmueble alquilado con mayor metraje.
function consulta8() {
    var consulta = [];
    var contador = 0;
    var indice = 0;

    for (var i = 0; i < alquileres.length; i++) {
        var metraje = alquileres[i].inmueble.metros;
        if (metraje > contador) {
            contador = metraje;
            indice = alquileres[i].inmueble.id;
        }
    }

    for (var i = 0; i < inmuebles.length; i++) {
        if (inmuebles[i].id == indice) {
            console.log(inmuebles[i]);
            consulta.push(inmuebles[i]);
        }
    }
    cargarTabla(consulta, "Inmueble alquilado con mayor metraje.");
}



//Casa alquilada de mayor precio, con garantia “Contaduria” y propietario soltero
function consulta9() {
    var consulta = [];

    var contador = 0;
    var indice = 0;
    var ciP = null;

    for (var i = 0; i < alquileres.length; i++) {
        var precio = alquileres[i].inmueble.precio;
        var garantia = alquileres[i].arrendatario.garantia;
        var ciPropietario = alquileres[i].inmueble.cipropietario;

        if (garantia == "CONTADURIA") {
            if (precio > contador) {
                contador = precio;
                indice = alquileres[i].inmueble.id;
                ciP = alquileres[i].inmueble.cipropietario;
            }
        }
    }

    var esCasa = false;

    for (var i = 0; i < casas.length; i++) {
        var idC = casas[i].id;
        if (inidice = idC) {
            esCasa = true;
        } else {
            esCasa = false;
        }
    }

    if (esCasa) {
        for (var i = 0; i < propietarios.length; i++) {
            var ci = propietarios[i].ci;
            var estado = propietarios[i].estado_civil;
            if ((ci == ciP) && (estado == "SOLTERO")) {
                console.log(propietarios[i]);
                consulta.push(propietarios[i]);
            }
        }
    }

    cargarTabla(consulta, "Casa alquilada de mayor precio, con garantia “Contaduria” y propietario soltero.");
}


//Apartamento alquilado, con propietario y arrendatario soltero.
function consulta10() {
    var consulta = [];

    function solteriaDePropietario(ci) {
        for (var i = 0; i < propietarios.length; i++) {
            var cip = propietarios[i].ci;
            if (ci == cip) {
                var estado = propietarios[i].estado_civil;
                return estado;
            }
        }
    }

    function tipoInmueble(idInmueble) {
        for (var i = 0; i < inmuebles.length; i++) {
            var tipo = inmuebles[i].tipo;
            var id = inmuebles[i].id;

            if (idInmueble == id) {
                return tipo;
            }
        }
    }


    for (var i = 0; i < alquileres.length; i++) {
        var estadoArrendatario = alquileres[i].arrendatario.estado_civil;
        var estadoPropietario = solteriaDePropietario(alquileres[i].inmueble.cipropietario);
        var tipo = tipoInmueble(alquileres[i].inmueble.id);

        if (estadoArrendatario == "SOLTERO" && estadoPropietario == "SOLTERO" && tipo == "APARTAMENTO") {
            consulta.push(alquileres[i].inmueble);
        }
    }
    cargarTabla(consulta, "Apartamento alquilado, con propietario y arrendatario soltero.");

}