//clases usando funciones
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;

  this.saludar = function saludo() {
    console.log(`Hola, me llamo ${this.nombre} y tengo ${this.edad} años`);
  };
}

let manolo = new Persona("Manolo", 30);
manolo.saludar();

Persona.prototype.gritar = function () {
  console.log("GRITO " + this.nombre);
};

manolo.gritar;
