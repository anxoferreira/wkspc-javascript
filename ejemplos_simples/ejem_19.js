//funciones de orden superior
//dado un array de numeros me quedo solo con los positivos

const numeros = [2, -5, 3, 6, -1];

for (numero of numeros) {
  if (numero > 0) {
    console.log(numero);
  }
}

// paradigma de programacion declarativa
//pilla positivos
const resultado = numeros.filter((num) => num > 0);
console.log(resultado);

//pilla pares
const par = numeros.filter((num) => num % 2 === 0);
console.log(par);

// mostrar el cuadrado de los numeros que hay en el siguiente array
const enteros = [2, 6, 1];
const cuadrados = enteros.map((num) => num * num);
console.log(cuadrados);

// Mostrar todos estos nombres en mayusculas
const nombres = ["Antonio", "Pepe", "Sergio", "Ángel"];
const nombresMayus = nombres.map((nom) => nom.toUpperCase());
console.log(nombresMayus);

// Mostrar los positivos duplicados
const datos = [6, 1, 4, -3, 2, -6];
const datosPosDuplicados = datos
  .filter((datin) => datin >= 0)
  .map((datin) => datin * 2);
console.log(datosPosDuplicados);

// Mostrar cada hobbie entre las etiquetas <li> y </li>
const hobbies = ["Beber", "Gamblear", "Programar"];
const hobbiesHTML = hobbies.map((hobbie) => `<li>${hobbie}</li>`);
console.log(hobbiesHTML);

// Dados los números, súmalos
const nums = [2, 5, 1, 2];
const suma = nums.reduce((num1, num2) => num1 + num2, 0);
console.log(suma);

const users = ["Antonio", "Pepe", "Angel"];
users.forEach(guardarBD);

function guardarBD(user) {
  // guardo en la BD ese usuario
  // insert into xxx values()
  console.log(`Se guardó correctamente el usuario ${user} en la bd`);
}

// find
const numeros2 = [3, 2, 5, 7];
const numEncontrado = numeros2.find((num) => num > 2);
console.log(numEncontrado);

// some ( si alguno de los elementos cumpe la condicion) --> booleano
// every (todos los elementos cumplen la condicion) --> booleano

const notas = [2, 5, 8, 9];
let aprobado = notas.some((nota) => nota >= 5);
console.log(aprobado);

// sort
const puntos = [4, 2, 6, 1];
puntos.sort((a, b) => b - a); // ordena de mayor a menor
console.log(puntos);

// flat [ 1, [3, 5, [3, 4]]] =>

// slice
const valores_alumnos = [6, 4, 3, 2, 1];
const subconjunto = valores_alumnos.slice(1, 3 + 1); // 4, 3, 2
console.log(subconjunto);

// splice
const valores_profesores = [5, 6, 8, 2, 3];
valores_profesores.splice(1, 0, "a", "b");
console.log(valores_profesores);

// indeOf / lastIndexOf
const nombres_alumnos = ["Ana", "Juana", "Laura", "Rosario"];
const index = nombres_alumnos.indexOf;
console.log(index);
