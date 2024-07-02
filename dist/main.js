"use strict";
// Selecciona el elemento input y el elemento de texto de debounce del DOM
const input = document.querySelector("input");
const textoDebounce = document.querySelector("#debounce");
// Agrega un event listener al elemento input para el evento 'input'
if (input) {
    input.addEventListener("input", (e) => {
        const target = e.target;
        // Asegura que el target sea un HTMLInputElement antes de acceder a su valor
        if (target) {
            valorDebounce(target.value);
        }
    });
}
// Crea una función con debounce que actualiza el elemento textoDebounce
let valorDebounce = debounceFunction((value) => {
    if (textoDebounce) {
        textoDebounce.textContent = value;
    }
    console.log("ideas leidas");
}, 250);
//hacemos el callback necesario para el tiempo
function debounceFunction(callback, delay = 250) {
    let timer;
    return (...args) => {
        // Limpia el timer anterior si existe
        if (timer) {
            clearTimeout(timer);
        }
        // Establece un nuevo timer con el retraso especificado
        timer = window.setTimeout(() => {
            callback(...args);
        }, delay);
    };
}
//# sourceMappingURL=main.js.map