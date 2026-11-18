import { sumar } from "./calculadora.js";

import "./style.css";

document.querySelector("#app").innerHTML = `
  <h1>Calculadora con Vite</h1>

  <input id="a" type="number" value="8">
  <input id="b" type="number" value="5">

  <button id="sumar">Sumar</button>

  <p id="resultado"></p>
`;

document.querySelector("#sumar").addEventListener("click", () => {
  const a = Number(document.querySelector("#a").value);
  const b = Number(document.querySelector("#b").value);

  document.querySelector("#resultado").textContent = sumar(a, b);
});
