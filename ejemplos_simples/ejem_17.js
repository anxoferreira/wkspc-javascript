class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}

class Alumno extends Persona {
  static maxNumAlumnos = 7;
  static {
    //inicializacion estatica
    console.log("inicio estatico");
  }
  #notaPorDefecto = 4;
  constructor(nombre, edad, nota) {
    super(nombre, edad);
    this.nota = nota;
  }
}

let estudiante1 = new Alumno("pedrito", 25, 7);

console.log(estudiante1 instanceof Alumno);
