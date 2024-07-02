"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debounceFunction = void 0;
function debounceFunction(callback, delay = 250) {
    let timer;
    return (...args) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}
exports.debounceFunction = debounceFunction;
//# sourceMappingURL=debounceFunction.js.map