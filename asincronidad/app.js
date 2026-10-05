const input = document.querySelector("#nombre");
const boton = document.getElementById("buscar");
const resultado = document.getElementById("resultado");

//boton.addEventListener("click", buscarPokemonPromesas);
boton.addEventListener("click", buscarPokemonAwait);

async function buscarPokemonAwait() {
  try {
    const nombre = input.value.toLowerCase();
    if (!nombre) return;
    const url = "https://pokeapi.co/api/v2/pokemon/";
    const response = await fetch(url + nombre);
    const pokemon = await response.json();
    resultado.innerHTML = `
    <h2>${pokemon.name}</h2>
    <h3>${pokemon.weight / 10} Kg</h3>
    <img src="${pokemon.sprites.front_default}"/>
  `;
  } catch (error) {
    resultado.innerHTML = `<p>Pokemon no encontrado</p>`;
  }
}

// callbaks, promesas (then), async/await (callbacks fuera)
function buscarPokemonPromesas() {
  // nombre vacío
  const nombre = input.value.toLowerCase();
  const url = "https://pokeapi.co/api/v2/pokemon/";
  fetch(url + nombre)
    .then((response) => response.json()) //llega la respuesta y la convierte a json
    .then((pokemon) => {
      resultado.innerHTML = `
                <h2>${pokemon.name}</h2>
                <he3>${pokemon.weight / 10} Kg</h3>
                <img src="${pokemon.sprites.front_default}"/>
            `;
    })
    .catch((error) => {
      resultado.innerHTML = `<p>Pokemon no encontrado</p>`;
    });
}
