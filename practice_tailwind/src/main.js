import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class="flex flex-col h-screen">
    <div class="bg-blue-500 p-4 ">Elemento1</div>
    <nav class="flex gap-5 pl-4 flex-wrap>
      <a href="#">manu1</a>
      <a href="#">manu2</a>
      <a href="#">manu3</a>
    </nav>
    <div class="bg-green-500 grow flex">
      <aside class="bg-gray-400 text-black p-4">Menu</aside>
      <main class="bg-amber-300 grow p-4">Contenido</main>
    </div>
    <div class="bg-red-500 p-4 ">Elemento3</div>
  </div>  

`;
