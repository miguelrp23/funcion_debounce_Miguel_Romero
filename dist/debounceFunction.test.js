"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debounceFunction_1 = require("./debounceFunction");
jest.useFakeTimers();
describe('debounceFunction', () => {
    test('should debounce is a type function ', () => {
        expect(typeof debounceFunction_1.debounceFunction).toBe("function");
    });
    test('should only call the callback once ', () => {
        const callback = jest.fn();
        const debounced = (0, debounceFunction_1.debounceFunction)(callback, 250);
        debounced('test1');
        debounced('test2');
        debounced('test3');
        jest.advanceTimersByTime(250);
        expect(callback).toHaveBeenCalledTimes(1);
    });
});
//# sourceMappingURL=debounceFunction.test.js.map