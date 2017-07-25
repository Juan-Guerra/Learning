function activarModal(form) {
    $(".alta-modal").addClass("activar");
    $(".contenedor-modal").removeClass("desactivar");
    $(".contenedor-modal").addClass("activar-modal");


    if (form == "propietarios") {
        $(".contenedor-modal").load("./propietarios.html");
    } else if (form == "arrendatarios") {
        $(".contenedor-modal").load("./arrendatarios.html");
    } else if (form == "casas") {
        $(".contenedor-modal").load("./casas.html");
    } else if (form == "apartamentos") {
        $(".contenedor-modal").load("./apartamentos.html");
    } else if (form == "alquiler") {
        $(".contenedor-modal").load("./alquileres.html");
    }



}

function desactivarModal() {
    $(".contenedor-modal").addClass("desactivar");
    $(".alta-modal").removeClass("activar");

}






function altaPropietario() {
    var ci;
    var nombre, apellido, estado_civil, sexo;

    ci = $("#cedula").val();
    nombre = $("#nombre").val();
    apellido = $("#apellido").val();
    estado_civil = $("#estadoCivil").val();


    var radio = document.getElementById("optionsRadios1");

    if (radio.checked) {
        sexo = $("#optionsRadios1").val();
    } else {
        sexo = $("#optionsRadios2").val();
    }



    var nuevoPropietario = new Propietario(ci, nombre, apellido, estado_civil, sexo);
    propietarios.push(nuevoPropietario);

    console.log("\n\nSe agregó un nuevo propietario: ");
    console.log(nuevoPropietario);

    alert("Se intentó ingresar el nuevo propietario");
    desactivarModal();
    consultaPropietarios();

}




function altaArrendatario() {
    var ci;
    var nombre, apellido, estado_civil, sexo, garantia;

    ci = $("#cedula").val();
    nombre = $("#nombre").val();
    apellido = $("#apellido").val();
    estado_civil = $("#estadoCivil").val();
    garantia = $("#garantia").val();


    var radio = document.getElementById("optionsRadios1");

    if (radio.checked) {
        sexo = $("#optionsRadios1").val();
    } else {
        sexo = $("#optionsRadios2").val();
    }


    var nuevoArrendatario = new Arrendatario(ci, nombre, apellido, estado_civil, sexo, garantia);
    arrendatarios.push(nuevoArrendatario);

    console.log("\n\nSe agregó un nuevo arrendatario: ");
    console.log(nuevoArrendatario);

    alert("Se intentó ingresar el nuevo arrendatario");
    desactivarModal();
    consultaArrendatarios();

}




function altaCasa() {
    var id = parseInt(inmuebles.length) + 2;

    var precio = $("#precio").val();
    var metros = $("#metros").val();
    var dormitorios = $("#dormitorios").val();
    var garage = $("#garage").val();
    var cipropietario = $("#comboPropietario").val();
    var jardin = $("#jardin").val();


    var nuevaCasa = new Casa(id, precio, metros, dormitorios, garage, cipropietario, jardin);
    casas.push(nuevaCasa);

    var nuevoInmueble = new Inmueble(id, "CASA", precio, metros, dormitorios, garage, jardin, "-", cipropietario);
    inmuebles.push(nuevoInmueble);

    console.log("\n\nSe agregó una nueva casa: ");
    console.log(nuevaCasa);



    alert("Se intentó ingresar la nueva casa");
    desactivarModal();
    consultaCasas();


}


function altaApartamento() {
    var id = parseInt(inmuebles.length) + 2;

    var precio = $("#precio").val();
    var metros = $("#metros").val();
    var dormitorios = $("#dormitorios").val();
    var garage = $("#garage").val();
    var cipropietario = $("#comboPropietario").val();
    var anio = $("#anio").val();

    var nuevoApartamento = new Apartamento(id, precio, metros, dormitorios, garage, anio, cipropietario);
    apartamentos.push(nuevoApartamento);


    var nuevoInmueble = new Inmueble(id, "APARTAMENTO", precio, metros, dormitorios, garage, "-", anio, cipropietario);
    inmuebles.push(nuevoInmueble);

    console.log("\n\nSe agregó un nuevo apartamento: ");
    console.log(nuevoApartamento);

    alert("Se intentó ingresar el nuevo apartamento");
    desactivarModal();
    consultaApartamentos();

}



function altaAlquiler() {
    var idInmueble = $("#comboInmueble").val();
    var ciarrendatario = $("#comboArrendatario").val();
    var fechaFeaInicio = $("#fechaInicio").val();
    var fechaFeaFin = $("#fechaFin").val();


    var inmueble = Object;
    var arrendatario = Object;
    var fechaInicio = Date;
    var fechaFin = Date;
    // -------------------------------------------------------------------------------------------------------


    //Busca la "idInmueble" en el array de apartamentos 
    for (var j = 0; j < apartamentos.length; j++) {
        var idApartamento = apartamentos[j].id;
        if (idInmueble == idApartamento) {
            inmueble = apartamentos[j];
        }
    }


    //Busca la "idInmueble" en el array de casas 
    for (var j = 0; j < casas.length; j++) {
        var idCasas = casas[j].id;
        if (idInmueble == idCasas) {
            inmueble = apartamentos[j];
        }
    }


    //ARRENDATARIO    
    for (var e = 0; e < arrendatarios.length; e++) {
        var cedula = arrendatarios[e].ci;

        if (cedula == ciarrendatario) {
            arrendatario = arrendatarios[e];
        }
    }

    //FECHA INICIO
    var fechaFea = fechaFeaInicio.split("/");
    fechaInicio = new Fecha(...fechaFea);



    //FECHA FIN
    var fechaFea = fechaFeaFin.split("/");
    fechaFin = new Fecha(...fechaFea);


    var nuevoAlquiler = new Alquileres(inmueble, arrendatario, fechaInicio, fechaFin);
    alquileres.push(nuevoAlquiler);

    // -------------------------------------------------------------------------------------------------------

    console.log("\n\nSe agregó un nuevo alquiler: ");
    console.log(nuevoAlquiler);

    console.log("\n\nTodos los alquileres hasta el momento: ");    
    console.log(alquileres);



    alert("Se intentó ingresar el nuevo alquiler");
    desactivarModal();
    consultaAlquileres();
}








function cargarComboPropietario(element) {
    var text = "";
    for (var i = 0; i < propietarios.length; i++) {
        var ci = propietarios[i].ci;
        var nombre = propietarios[i].nombre;
        var apellido = propietarios[i].apellido;

        text = text + '<option value="' + ci + '">' + ci + " " + nombre + " " + apellido + '</option>';
    }

    $("#" + element).html(text);
}


function cargarComboArrendatarios(element) {
    var text = "";
    for (var i = 0; i < arrendatarios.length; i++) {
        var ci = arrendatarios[i].ci;
        var nombre = arrendatarios[i].nombre;
        var apellido = arrendatarios[i].apellido;

        text = text + '<option value="' + ci + '">' + ci + " " + nombre + " " + apellido + '</option>';
    }

    $("#" + element).html(text);
}



function cargarComboInmueble(element) {
    var text = "";
    for (var i = 0; i < inmuebles.length; i++) {
        var id = inmuebles[i].id;
        var tipo = inmuebles[i].tipo;
        var precio = inmuebles[i].precio;
        var metros = inmuebles[i].metros;
        var dormitorios = inmuebles[i].dormitorios;

        text = text + '<option value="' + id + '"> Id:' + id + "\t tipo: " + tipo + " \t$" + precio + "\t" + metros + "mts \t   Dorm." + dormitorios + '</option>';
    }

    $("#" + element).html(text);
}