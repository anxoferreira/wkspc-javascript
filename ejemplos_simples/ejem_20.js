const datos = ["Antonio", 20];

const nombre = datos[0];
const edad = datos[1];

console.log("Nombre: " + nombre + ", edad: " + edad);

const [nombre2, edad2] = datos;
console.log("Nombre: " + nombre2 + ", edad: " + edad2);

const numeros = [3, 5, 7, 6, 5, 4];
const [primero, segundo, ...resto] = numeros;
console.log(primero);
console.log(segundo);
console.log(resto);

function suma(...numeros) {
  let total = 0;
  for (let num of numeros) {
    total += num;
  }
  return total;
}

console.log(suma(2, 3, 5, 2));
