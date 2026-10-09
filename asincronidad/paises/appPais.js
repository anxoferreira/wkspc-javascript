const form = document.querySelector("#form");
const pais = document.querySelector("#pais");
const boton = document.getElementById("buscar");

boton.addEventListener("click", buscarPaisesAwait);

function buscarPaisesPromesas(event) {
  event.preventDefault();
  const API = "https://api.restcountries.com/countries/v5/names.common/";
  const API_KEY = "rc_live_cb1fceda25404a5cb9115691a936c71a";

  fetch("https://api.restcountries.com/countries/v5?q=" + pais.value, {
    headers: {
      Authorization: "Bearer " + API_KEY,
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then((info) => {
      resultado.innerHTML = `
            <p>${`Capital ${info.data.objects[0].capitals[0].name}`}</p>
            <img src="${info.data.objects[0].flag.url_svg}"/>
        `;
    })
    .catch((error) => console.log("Error al consultar pais"));
}

async function buscarPaisesAwait(event) {
  event.preventDefault();
  try {
    const API = "https://api.restcountries.com/countries/v5/names.common/";
    const API_KEY = "rc_live_cb1fceda25404a5cb9115691a936c71a";
    const response = await fetch(
      "https://api.restcountries.com/countries/v5?q=" + pais.value,
      {
        headers: {
          Authorization: "Bearer " + API_KEY,
        },
      },
    );
    const infoPais = await response.json();
    resultado.innerHTML = `
            <p>${`Capital ${infoPais.data.objects[0].capitals[0].name}`}</p>
            <img src="${infoPais.data.objects[0].flag.url_svg}"/>
        `;
  } catch (error) {
    resultado.innerHTML = `<p>Pais no encontrado</p>`;
  }
}
