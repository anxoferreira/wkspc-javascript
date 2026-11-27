// eslint-disable-next-line no-useless-assignment
let edad: number = 20

const nombre: string = "Manolo"

edad = 60
console.log(nombre)
console.log(edad)

const numeros: number[] = [1, 2, 3, 7, ]
console.log(numeros)

const nombres: [string, boolean, number] = ['Manolo', true, 20]
console.log(nombres)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const valor: any = "esto es una frase"
console.log(valor)


const valorDesconocido: unknown = 20
console.log(valorDesconocido)

function suma(a:number, b:number): number{
    return a + b
}

suma(10, 20)

function saludar(): void{
    console.log("Hola, un saludo de Cuotaman")
}
console.log(saludar)

/* function error(mensaje:string): never{
    throw new Error(mensaje)
}
*/

const valorNulo: null = null
const valorIndefinido: undefined = undefined

console.log(valorNulo)
console.log(valorIndefinido)

// Altura ya es de tipo number por interferencia de datos
const altura: number = 180
console.log(altura)

function restar(a:number, b:number){
    return a-b
}
restar(10,20)

// Con esto puede ser tanto string como numero
const clavePrimaria: string | number = 'Abc1234'
console.log(clavePrimaria)

const estadoCivil: "casado" | "soltero" | "viudo" = 'soltero'
console.log(estadoCivil)

function saludar2(nombre:string, apodo?:string){
    if (apodo) {   
        return `Hola ${nombre} (${apodo})`
    } else {
        return `Hola ${nombre}`
    }
}
saludar2("Daniel", "CuotaMan")
saludar2("Daniel")

function isEven(number:number) {
    return number % 2 === 0
}
isEven(6)

/* function combinar(a:number, b:number);
function combinar(a:string, b:string);
*/

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function combinar(a:any, b:any) {
    if(typeof a === "number" && typeof b === "number"){
        return a + b
    }

    if (typeof a === "string" && typeof b === "string"){
        return a + b
    }
}

combinar(3, 4)
combinar("a", "b")

const persona: {nombre:string, edad:number, genero?:string} = {
    nombre: "Juan",
    edad: 20,
    genero: "Masculino"
}
console.log(persona)

interface Mascota{
    nombre: string,
    edad: number,
    especie: "Perro" | "Gato" | "Pájaro",
    raza?: string,
    saltar(centimetros:number): void
}

const mascota: Mascota = {
    nombre: "Pipo",
    edad: 7,
    especie: "Perro",
    raza: "Mastín",
    saltar: (centimetros) => console.log("Salto alto, " + centimetros)
}
console.log(mascota.nombre)
mascota.saltar(10)

class Moto {
    public cilindrada: number
    private marca: string
    protected cantidadGasolina: number

    constructor(marca: string){
        this.cilindrada = 125
        this.marca = marca
        this.cantidadGasolina = 0
    }

    public acelerar():void {
        // imagina que acelero
    }
}

const miMoto = new Moto('Honda')
console.log(miMoto)

interface Volador {
    volar(): void
}

interface Fumador {
    fumar(): void
}

interface Morible {
    morir():void
}

abstract class Animal implements Morible {
    abstract morir(): void
}

class Gaviota implements Volador, Fumador, Morible {
    volar() {
        console.log("Vuela, vuela ...")
    }
    fumar(){
        console.log("La gaviota fuma un peta")
    }
    morir() {
        console.log("MUERE!!!")
    }
}

console.log(new Gaviota())

function matar(cosa: Animal) {
    cosa.morir()
}
matar(new Gaviota())


interface Usuario{
    nombre: string,
    edad: number
}

interface Empleado {
    salario: number, 
    puesto: string
}

type UsuarioEmpleado = Usuario & Empleado

const jose: UsuarioEmpleado = {
    nombre: "Jose",
    edad: 20,
    salario: 2000,
    puesto: "Admin"
}

console.log(jose)



interface Personal {
    id:number,
    nombre: string,
    edad: number
}

const personaHospital: Partial <Personal> = {
    nombre: "Maria",
    edad: 30
}
personaHospital.nombre = "Mary"
console.log(personaHospital)

const personaHospital2: Readonly<Personal> = {
    id: 44,
    nombre: "Jose",
    edad: 30
}
console.log(personaHospital2)


const personaHospital3: Pick<Personal, "nombre"> = {
    nombre: "Rosa"
}
console.log(personaHospital3)

const personaHospital4: Omit<Personal, "edad"> = {
    id: 5,
    nombre: "Rosa"
}
console.log(personaHospital4)

// ? <--- OPtional chaining
interface Producto {
    nombre: string,
    precio: number,
    direccion: {
        ciudad: string
    }
}

const producto: Producto = {
    nombre: "Raton",
    precio: 25,
    /* direccion: {
        ciudad: "Vigo"
    } */
}
// ? ---> Esto significa que si le dieron la direccion puede acceder a ella y si no se la dieron permite que se pueda continuar sin 
// petar la app
console.log(producto.direccion?.ciudad)


// ?? <--- nulish coalescing
let apellidos = null 

/* if(apellidos === null) {
    console.log("Tu apellido es: anónimo")
} else {
    console.log("Tu apellido es: " + apellidos)
} */

// Esto comprueba si es null o undefined
console.log("Tu apellido es: " + (apellidos ?? "anónimo"))

// Esto comprueba si es nullish (0, false, "", NaN, null, undefined)
console.log("Tu apellido es: " + ( apellidos || "anonimo") )


// Tipa correctamente el alumno. Tiene nombre, apellidos, notaMedia
// Tiene datos de donde vive (ciudad, calle, estado) es opcional
// Tiene rol (que puede ser Admin, User)
// Muestra por pantalla la ciudad establecida
// En caso de no tener ciudad establecida, muestra "Desconocido"
// No tiene que haber errores de linter 

interface Direccion {
    ciudad: string,
        calle: string,
        estado: string
}

interface Alumno {
    nombre: string,
    apellidos: string,
    notas: [number, number, number],
    direccion?: Direccion,
    rol: "Admin" | "User"
}

const alumnoManuel: Alumno = {
    nombre: "Manuel",
    apellidos: "Ruiz",
    notas: [5, 8, 2],
    rol: "Admin"
}

console.log(alumnoManuel.direccion?.calle ?? "Desconocido")
/* const nota1 = alumnoManuel.notas[0]
const nota2 = alumnoManuel.notas[1]
const nota3 = alumnoManuel.notas[2] */

const [nota1, nota2, nota3] = alumnoManuel.notas

console.log(nota1, nota2, nota3)