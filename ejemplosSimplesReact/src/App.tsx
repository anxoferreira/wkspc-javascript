import { Link, Route, Routes } from 'react-router'
import './App.css'
import Alumno from './components/Alumno'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'

function App() {

  return (
    <>
      <nav className='flex gap-4'>
        <Link to="/pro">Productos </Link>
        <Link to="/cont">Contacto</Link>
      </nav>
      <main>
        <h1 className="text-blue-700">Bienvenido</h1>
        <Alumno nombre="Juan" edad={25} />
      </main>
      <Routes>
        <Route path="pro" element={<Productos/>}/>
        <Route path="cont" element={<Contacto/>}/>
      </Routes>
    </>
  )
}

export default App
