// Selecciona el elemento input y el elemento de texto de debounce del DOM
const input = document.querySelector("input") as HTMLInputElement;
const textoDebounce = document.querySelector("#debounce") as HTMLElement;

// Agrega un event listener al elemento input para el evento 'input'
if (input) {
    input.addEventListener("input", (e: Event) => {
        const target = e.target as HTMLInputElement;
        // Asegura que el target sea un HTMLInputElement antes de acceder a su valor
        if (target) {
            valorDebounce(target.value);
        }
    });
}

// Crea una función con debounce que actualiza el elemento textoDebounce
let valorDebounce = debounceFunction((value: string) => {
    if (textoDebounce) {
        textoDebounce.textContent = value;
    }
    console.log("ideas leidas");
}, 250);

//hacemos el callback necesario para el tiempo

function debounceFunction<T extends (...args: string[]) => void>(callback: T, delay = 250): 
(...args: Parameters<T>) => void {
    let timer: number | undefined;
    return (...args: Parameters<T>) => {
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
