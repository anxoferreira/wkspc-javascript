class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log("Hola soy " + this.nombre);
  }
}

let rosario = new Persona("Rosarito", 30);
rosario.saludar();
