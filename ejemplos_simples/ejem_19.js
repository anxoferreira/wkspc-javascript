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
