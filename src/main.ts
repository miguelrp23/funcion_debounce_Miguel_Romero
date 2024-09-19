
const input = document.querySelector("input") as HTMLInputElement;
const textoDebounce = document.querySelector("#debounce") as HTMLElement;


if (input) {
    input.addEventListener("input", (e: Event) => {
        const target = e.target as HTMLInputElement;
     
        if (target) {
            valorDebounce(target.value);
        }
    });
}


let valorDebounce = debounceFunction((value: string) => {
    if (textoDebounce) {
        textoDebounce.textContent = value;
    }
    console.log("ideas leidas");
}, 250);



function debounceFunction<T extends (...args: string[]) => void>(callback: T, delay = 250): 
(...args: Parameters<T>) => void {
    let timer: number | undefined;
    return (...args: Parameters<T>) => {
        
        if (timer) {
            clearTimeout(timer);
        }
        
        timer = window.setTimeout(() => {
            callback(...args);
        }, delay);
    };
}
