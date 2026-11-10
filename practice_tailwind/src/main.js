import "./style.css";

document.querySelector("#app").innerHTML = `
<h1 class="text-red-500 text-2xl">Titulo</h1>
<div class="text-fuchsia-100 text-xs">Prueba de tailwind</div>
<div class="bg-amber-100 text-center">Texto centrado</div>
<span class="text-green-500 bg-amber-500">Texto en verde</span>
<div class="italic">cursiva</div>
<div class="font-bold">negrita</div>
<div class="m-4">CEBEM</div>
<div class="mx-4 bg-blue-300 text-black p-5">CEBEM</div>
<div class="bg-gradient-to-r from-orange-400 to-purple-500 text-center text-black p-50 text-9xl">PEPE</div>
<div class="border-4 border-green-400 bg-gradient-to-r from-blue-400 to-lime-400 text-black p-50 text-center text-9xl font-vitrasa">ANTONIO</div>
<div class="bg-amber-955 bg-amber-900 text-center text-white p-20 text-9xl sm:bg-gradient-to-br sm:from-red-500 sm:to-yellow-500">RESPONSIVE</div>
<nav class="flex flex-col sm:flex-row gap-4 mx-4">
  <a href="#" class="text-white hover:text-amber-300 hover:text-blue-300 hover:text-2xl">Inicio</a>
  <a href="#" class="text-white hover:text-amber-300 hover:text-blue-300 hover:text-2xl">Cursos</a>
  <a href="#" class="text-white hover:text-amber-300 hover:text-blue-300 hover:text-2xl">Class</a>
</nav>
`;
