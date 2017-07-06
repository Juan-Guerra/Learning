function Persona (nombre,apellido,edad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
    
}

var params = ["Juan", "Guerra", "41"];
var juan = new Persona(...params);
console.log(juan); 