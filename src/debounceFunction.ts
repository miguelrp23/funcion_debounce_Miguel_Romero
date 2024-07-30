export function debounceFunction<T extends (...args: any[]) => 
void>(callback: T, delay: number = 250): (...args: Parameters<T>) => void {
    let timer: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}
