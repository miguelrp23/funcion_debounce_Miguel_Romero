import { debounceFunction } from './debounceFunction';

 jest.useFakeTimers();

describe('debounceFunction', () => {
  test('should debounce is a type function ', () => {
  expect(typeof debounceFunction).toBe("function");
  });
  

   test('should only call the callback once ', () => {
     const callback = jest.fn();
     const debounced = debounceFunction(callback, 250);

     debounced('call1');
     debounced('call2');
     debounced('call3');
    

     jest.advanceTimersByTime(250);
     expect(callback).toHaveBeenCalledTimes(1);
  });
});
