interface AlumnoProps{
    nombre: string
    edad: number
}

export default function Alumno({ nombre, edad }: AlumnoProps) {
    return <div>
        <h2>Soy un alumno</h2>
        <p>Me llamo {nombre}</p>
        <p>Tengo {edad} años y conduzco en vitrasa</p>
    </div>
}