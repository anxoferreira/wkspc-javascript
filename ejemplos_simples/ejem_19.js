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

//mostrar el cuadrado de los numeros
const cuadrado = numeros.map((num) => num * num);
console.log(cuadrado);

//mostrar nombres en mayusculas
const nombres = ["antonio", "pepe", "angel", "vitrasa"];
const mayus = nombres.map((nomb) => nomb.toUpperCase());
console.log(mayus);

//mostrar los positivos duplciados
const duplicados = numeros.filter((num) => num > 0).map((num) => num * 2);
console.log(duplicados);

//mostrar cada hobbi entre etiquetas li
const hobbies = ["cantar", "comer", "dormir", "chepa"];
const hobbiesHtml = hobbies.map((hobbie) => `<li>${hobbie}<li>`);

//dame los numeros sumados
const suma = numeros.reduce((num1, num2) => num1 + num2);
console.log(suma);
